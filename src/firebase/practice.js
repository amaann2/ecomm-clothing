import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firestore = firebase.firestore();

//query
firestore
  .collection("user")
  .doc("id")
  .collection("nameOFTheCollection")
  .doc("idOfTheDocument");

//to query the document in nested
firestore.doc("/user/id/collectionname/docname");

//to query the collection
firestore.collection("/user/id/collectionname");


