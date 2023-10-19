import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Auth from "./components/Auth";
import Manage from "./components/Manage";
import Subscribe from "./components/Subscribe";
import "./mediaqueries.css";
import Watch from "./components/Watch";
import ShowPopupModal from "./components/ShowPopupModal";
import Player from "./components/Player";

function App() {
  const [user] = useAuthState(auth);
  const [currentlyactive, setcurrentlyactive] = useState(false);
  const n = useNavigate();
  const [det, setDet] = useState();
  const [next, setNext] = useState(false);
  useEffect(() => {}, [user]);
  useEffect(() => {
    if (!user) n("/");
    const checkAlreadyActive = async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        const userData = docSnap.data();
        setDet(userData);
        if (userData.subscriptionactive) {
          setcurrentlyactive(true);
          n("/watch");
        }
      }
    };
    checkAlreadyActive();
  }, [user]);
  // useEffect(() => {
  //   const checkAlreadyActive = async () => {
  //     if (user) {
  //       const docRef = doc(db, "users", user.uid);
  //       const docSnap = await getDoc(docRef);
  //       const userData = docSnap.data();
  //       setDet(userData);
  //       if (userData.subscriptionactive) {
  //         setcurrentlyactive(true);
  //       }
  //     }
  //   };
  //   checkAlreadyActive();
  // }, []);
  const cancelSubscription = async () => {
    const userref = doc(db, "users", user.uid);
    await updateDoc(userref, {
      subscriptionactive: false,
    });
    setcurrentlyactive(false);
    document.getElementsByClassName("status")[0].classList.add("cancelled");
    document.getElementById("cancelbut").style.display = "none";
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route
          path="/subscribe"
          element={<Subscribe setNext={setNext} next={next} />}
        />
        <Route
          path="/manage"
          element={
            <Manage
              setNext={setNext}
              next={next}
              user={user}
              det={det}
              cancelSubscription={cancelSubscription}
              currentlyactive={currentlyactive}
              setcurrentlyactive={setcurrentlyactive}
            />
          }
        />
        <Route path="/watch" element={<Watch />}>
          <Route path=":id" element={<ShowPopupModal />} />
        </Route>
        <Route path="/player" element={<Player />} />
      </Routes>
    </>
  );
}

export default App;
