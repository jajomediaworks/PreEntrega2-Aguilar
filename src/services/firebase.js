import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, where, query, addDoc } from "firebase/firestore"; // Conectarnos a la base de datos
// Colletion: hacemos un llamado a la collettion o referencia en firebase
// getDosc: llamado a los products  o productos de nuestra colletion en firebase
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu6ky1_2PXruv70GyV1xYQwTvKtAhnbIM",
  authDomain: "ecommerce-react-af1e6.firebaseapp.com",
  projectId: "ecommerce-react-af1e6",
  storageBucket: "ecommerce-react-af1e6.appspot.com",
  messagingSenderId: "283230702239",
  appId: "1:283230702239:web:aa28cb9e57b6487512b0aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const databasefire = getFirestore(app); // Variable para crear la base de datos - guardar la conexion a firestore



////////////////// I T E M -  L I S T - C O N T A I N E R ////////////////////////
////////////////// A G R E G A R - P R O D U C T O S //////////////////////////
export async function getProducts(){

    const productsRef = collection( databasefire, "products" );
    const snapshot = await getDocs(productsRef);

    const allproducts = snapshot.docs.map((elem) => { // TRAER EL ID DE FIREBASE
      let product = elem.data();
      product.id = elem.id; 
      return product;
    });
        return allproducts;

    // OPTION SUGRAN SYNTAX
    // const allproducts = snapshot.docs.map((elem) => ({...elem.data(), ID: elem.ID}) );
    // console.log(getDocs(productsRef));

}


////////////////// I T E M -  D E T A I L - C O N T A I N E R ////////////////////////
////////////////// A G R E G A R - P R O D U C T O  //////////////////////////
export async function  getProduct(idParams){
        const productsRef = collection(databasefire, "products"); // Llamamos la colletion
        const docRef = doc(productsRef, idParams); // funtion para traer un documento getDoc = pasarle la referencia a la colettion - ref al documento

        const snapshot = await getDoc(docRef); // Esperar que se cumpla la promesa
        return {...snapshot.data(), id: snapshot.id} // guardar el id para conectarnos al context
}


////////////////// C A T E G O R Y  - P R O D U C T O ////////////////////////
/// CONSULTAS SIMPLES Y COMPUESTAS EN FIREBASE /////////
/// Una consulta sobre la colletion ///

export async function getProductByCategory(categoryUrl) {
    const productsRef = collection(databasefire, "products"); // Llamamos la colletion

    const q = query(productsRef, where("category", "==", categoryUrl)); // query = consulta y where: Que es lo quiero comparar o buscar

    const snapshot = await getDocs(q);

    const allproducts = snapshot.docs.map((elem) => { // TRAER EL ID DE FIREBASE
        let product = elem.data();
        product.id = elem.id; 
        return product;
      });
      return allproducts;
}


////////////////// O R D E R ////////////////////////

export async function createOrder (order){
  const orderRef = collection(databasefire, "order")

  let respuesta = await addDoc(orderRef, order);
  console.log(respuesta, respuesta.id);
  return respuesta.id
}



export default databasefire;