import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { toast } from "react-toastify";

const useFetchDocuments = (collection, documentID) => {
    const [document, setDocument] = useState(null)

    const getDocument =  async() => {
        const docRef = doc(db, collection, documentID);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          const obj = {
            id: documentID,
            ...docSnap.data()
          }
          setDocument(obj)
        } else {
          toast.error("Document not found")
        }
      }

      useEffect(() => {
        getDocument()
      })

      return {document};
}

export default useFetchDocuments