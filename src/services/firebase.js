import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, where, query, addDoc, orderBy } from "firebase/firestore"; // Conectarnos a la base de datos

// Colletion: hacemos un llamado a la collettion o referencia en firebase
// getDosc: llamado a los products  o productos de nuestra colletion en firebase
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
    const q = query(productsRef, orderBy("index"))
    const snapshot = await getDocs(q);

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

/////////////////// E N V I A R  A R R A Y A F I R E B A S E /////////////////////////////

export async function exportArray(){
  const products = [
  {
      id:	1,
      detail:	"El carb??n activado al vapor, combinado con c????amo org??nico rico en vitaminas y aceites de menta, extrae la suciedad y las toxinas para liberar los poros congestionados y devolver la claridad a la piel grasa y mixta. Sin ftalatos, sulfatos, parabenos, edta, gluten, subproductos animales, fragancias artificiales o colorantes. Se utiliza para limpiar rostro y cuerpo profundamente, as?? como purificar y oxigenar la piel gracias al Carb??n Activado. A lo largo del d??a nos topamos con numerosos agentes nocivos que hacen que la piel se resienta. Aunque pasen desapercibidos todos esos agentes se van acumulando. Con el jab??n a base de carb??n activado, aplic??ndolo sobre el rostro, se obtiene es una mascarilla que limpia, de manera profunda, la piel. Absorber la grasa y de esta manera consigue eliminar toda la suciedad de la piel.",
      imgurl:"https://cdn.shopify.com/s/files/1/0079/2556/3489/products/1_a71a8aa8-8fbc-410f-8059-33b71aff980b_1024x1024@2x.jpg?v=1635626763",
      title:	"THE GRANDPA SOAP CO",
      stock:1,
      category: "Cuerpo",
      price:	64900,
      discount: 25,
  },
  {
      id:	2,
      detail:	"El b??lsamo para estimular el crecimiento de la barba y el bigote tiene una textura cremosa para f??cil aplicaci??n y absorci??n. Es un cosm??tico de grado farmac??utico, con minoxidil al 5%, vitamina E y antioxidantes entre sus principales activos. Est?? formulado especialmente para todo tipo de piel y es ideal para estimular el crecimiento de barba y bigote mediante su aplicaci??n t??pica donde no hay vello o es muy delgado, de igual forma ayuda a engrosar y acelerar el crecimiento del mismo en aquellos individuos que ya cuentan con una buena barba. La mol??cula de minoxidil al 5% es la ??nica que est?? comprobada cl??nicamente que funciona para el crecimiento de barba y bigote. La presentaci??n en crema ayuda a que la absorci??n del minoxidil sea ??ptima, pues este es un vasodilatador que act??a estimulando la apertura de canales de potasio, impidiendo que el calcio (que env??a la se??al a los fol??culos para que detengan el crecimiento) ingrese directamente a las c??lulas.",
      imgurl:	"https://cdn.shopify.com/s/files/1/0079/2556/3489/products/tratamiento-crecimiento-de-barba-mountain-clan-crema-60-ml-353_1024x1024@2x.jpg?v=1609013415",
      title:	"MOUNTAIN CLAN",
      stock:	1,
      category: "Barba",
      price:	199900,
  },
  {
      id:	3,
      detail:	"El B??lsamo Verde (Green Balm) es una alternativa distinta al Minoxidil (sin sus efectos secundarios). Estimula y favores el crecimiento de vello de forma 100% natural. Soluci??n en crema de f??cil aplicaci??n y absorci??n que aumentar la densidad y vello de la Barba y Bigote por medio de activos 100% naturales. La eficacia versus a los tratamientos que contienen Minoxidil es de un 87%. Al igual que el Minoxidil la efectividad va a variar por diferentes factores como gen??tica, presencia de fol??culo y uso correcto (constancia y aplicaci??n en el ??rea a estimular el crecimiento). Contiene extracto de Palmira Palmata que activa la microcirculaci??n y reemplaza la funci??n del Minoxidil. Est?? formulado especialmente para todo tipo de piel y es ideal para estimular el crecimiento de barba y bigote mediante su aplicaci??n t??pica donde no hay vello o es muy delgado, de igual forma ayuda a engrosar y acelerar el crecimiento del mismo en aquellos individuos que ya cuentan con una buena barba.",
      imgurl:	"https://cdn.shopify.com/s/files/1/0079/2556/3489/products/1_e59a23c7-26cc-4262-837f-fa5755d67052_1024x1024@2x.jpg?v=1638380239",
      title:	"MEL BROS CO",
      stock:	1,
      category: "Afeitado",
      price:	199900,
  },
  {
      id:	4,
      detail:	"Si dispones de una barba gruesa y rebelde, seguramente necesitaras alg??n producto que sea capaz de mantenerlos en su sitio y, esto, es para lo que las ceras de barba y bigote se han creado, para estilizar y mantener firme la barba y el bigote. Si el aceite se usa para hidratar y suavizar tu barba, la cera se usa para mantenerla en su sitio. Cuando te dispongas a buscar ceras para barba y bigote vas a encontrar muchos b??lsamos que van a pretender hacerte creer que son ceras. No dejes que te enga??en la fijaci??n que te da la cera es mucho m??s fuerte que la de los b??lsamos.",
      imgurl:	"https://cdn.shopify.com/s/files/1/0079/2556/3489/products/cera-para-barba-y-bigote-fisticuffs-extra-fuerte-aroma-bourbon-madera-30-g-478_1024x1024@2x.jpg?v=1608852339",
      title:	"FISTICUFFS",
      stock:	1,
      category: "Afeitado",
      price:	6000,
      discount: 35,
  },
  {
      id:	5,
      detail:	"El b??lsamo para estimular el crecimiento de la barba y el bigote tiene una textura cremosa para f??cil aplicaci??n y absorci??n. Es un cosm??tico de grado farmac??utico, con minoxidil al 5%, vitamina E y antioxidantes entre sus principales activos. Est?? formulado especialmente para piel normal o seca y es ideal para estimular el crecimiento de barba y bigote mediante su aplicaci??n t??pica donde no hay vello o es muy delgado, de igual forma ayuda a engrosar y acelerar el crecimiento del mismo en aquellos individuos que ya cuentan con una buena barba. La mol??cula de minoxidil al 5% es la ??nica que est?? comprobada cl??nicamente que funciona para el crecimiento de barba y bigote. La presentaci??n en crema ayuda a que la absorci??n del minoxidil sea ??ptima, pues este es un vasodilatador que act??a estimulando la apertura de canales de potasio, impidiendo que el calcio (que env??a la se??al a los fol??culos para que detengan el crecimiento) ingrese directamente a las c??lula",
      imgurl:	"https://cdn.shopify.com/s/files/1/0079/2556/3489/products/tratamiento-crecimiento-de-barba-mel-bros-co-crema-para-piel-normal-o-seca-60-ml-297_1024x1024@2x.jpg?v=1609013384",
      title:	"MEL BROS CO",
      stock:	4,
      category: "Barba",
      price:	88900,
  },
  {
      id:	6,
      detail:	"El shampoo para la barba de Mel Bros Co. est?? formulado con ingredientes 100% naturales y aceites esenciales para el cuidado e higiene diaria de la Barba y Bigote. Suaviza y disciplina el vello de la barba, adem??s de mantenerlo limpio y d??cil, tambi??n previene la resequedad de la piel y el desprendimiento de c??lulas de piel muerta en forma de caspa. Neutraliza cualquier clase de aroma que pueda afectar la barba, mientras purifica y refresca tu piel. Especial para no maltratar los vellos de la barba, a diferencia de los shampoo para cabello habituales.",
      imgurl:	"https://cdn.shopify.com/s/files/1/0079/2556/3489/products/shampoo-para-barba-mel-bros-co-aceites-esenciales-230-ml-761_1024x1024@2x.jpg?v=1609007585",
      title:	"MEL BROS CO",
      amount:	2,
      category: "Cabeza",
      price:	88900,
  }
  ];


  for (let item of products) {
    item.index = item.id;
    delete item.id // Borrar el id del Array
    addDoc( collection(databasefire, "products"), item).then((respuesta) => console.log("item creado", respuesta.id));
  }

}


export default databasefire;