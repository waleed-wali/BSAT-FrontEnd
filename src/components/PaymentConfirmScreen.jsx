// import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
// import { db } from "../../../firebase.config";
// import FinishCard from "./Component/FinishCard";
import Spinner from "react-spinner-material";

const ConfirmPaymentScreen = () => {
    
  const [loading, setLoading] = useState(false);
  const [params] = useSearchParams();
  const { id } = useParams();
  const navigate = useNavigate();
  const updateProposalStatus = async () => {
    setLoading(true);
    console.log("sameem")
    console.log(params)
    const status = params.get("redirect_status");
    console.log(status)
    if (status == "succeeded") {
    //   await updateDoc(doc(db, "proposals", id), {
    //     status: "succeeded",
    //   });

    //   const proposal =  await getDoc(doc(db, "proposals", id));
    //   console.log("proposal data is : ", proposal.data())
      
    //   const proposalData = await addDoc(collection(db, "invoices"), {
    //     ...proposal.data()
    //   });
        navigate("/ddashboard")
      console.log("invoice created successfully");

    }
    // succeeded
    setLoading(false);
  };

  

  useEffect(() => {
    updateProposalStatus();
  }, []);

  return (
    <div className="bg-prim2">

          {loading && (
            <div className=" bg-primary min-h-screen flex items-center justify-center">
              <Spinner className="text-white" color="white" />
            </div>
          )}
    </div>
  );
};

export default ConfirmPaymentScreen;