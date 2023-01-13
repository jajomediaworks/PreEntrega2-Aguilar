const dataProduct = [
    {
        id:	1,
        detail:	"Jab�n Limpieza Facial y Cuerpo The Grandpa Soap Co Carb�n Activado Desintoxicante 4.25 oz",
        imgurl:"https://cdn.shopify.com/s/files/1/0079/2556/3489/products/1_a71a8aa8-8fbc-410f-8059-33b71aff980b_1024x1024@2x.jpg?v=1635626763",
        title:	"THE GRANDPA SOAP CO",
        amount:1,
        category: "Cuerpo",
        price:	64900,
    },
    {
        id:	2,
        detail:	"Tratamiento Crecimiento de Barba Mountain Clan Crema Todo Tipo de Piel 60 ml",
        imgurl:	"https://cdn.shopify.com/s/files/1/0079/2556/3489/products/tratamiento-crecimiento-de-barba-mountain-clan-crema-60-ml-353_1024x1024@2x.jpg?v=1609013415",
        title:	"MOUNTAIN CLAN",
        amount:	1,
        category: "Barba",
        price:	199900,
    },
    {
        id:	3,
        detail:	"Tratamiento Crecimiento de Barba Mel Bros Co Crema 100% Natural Sin Minoxidil 60 ml",
        imgurl:	"https://cdn.shopify.com/s/files/1/0079/2556/3489/products/1_e59a23c7-26cc-4262-837f-fa5755d67052_1024x1024@2x.jpg?v=1638380239",
        title:	"MEL BROS CO",
        amount:	1,
        category: "Afeitado",
        price:	199900,
    },
    {
        id:	4,
        detail:	"Cera para Barba y Bigote Fisticuffs Extra Fuerte Aroma Bourbon y Madera 30 g",
        imgurl:	"https://cdn.shopify.com/s/files/1/0079/2556/3489/products/cera-para-barba-y-bigote-fisticuffs-extra-fuerte-aroma-bourbon-madera-30-g-478_1024x1024@2x.jpg?v=1608852339",
        title:	"FISTICUFFS",
        amount:	1,
        category: "Afeitado",
        price:	6.000,
    },
    {
        id:	5,
        detail:	"Tratamiento Crecimiento de Barba Mel Bros Co Crema Piel Normal o Seca 60 ml",
        imgurl:	"https://cdn.shopify.com/s/files/1/0079/2556/3489/products/tratamiento-crecimiento-de-barba-mel-bros-co-crema-para-piel-normal-o-seca-60-ml-297_1024x1024@2x.jpg?v=1609013384",
        title:	"MEL BROS CO",
        amount:	4,
        category: "Barba",
        price:	88.900,
    },
    {
        id:	6,
        detail:	"Shampoo Para Barba Mel Bros Co Aceites Esenciales 230 ml",
        imgurl:	"https://cdn.shopify.com/s/files/1/0079/2556/3489/products/shampoo-para-barba-mel-bros-co-aceites-esenciales-230-ml-761_1024x1024@2x.jpg?v=1609007585",
        title:	"88900",
        amount:	2,
        category: "Cabeza",
        price:	88.900,
    }
    ];
  
  const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
  console.log("Conneting to backend...");
  
  let error = false;
  
      setTimeout(() => {
        error ? reject("Usuario no autorizado") : resolve(dataProduct);
      }, 2000);
    });
  };


  const getProduct = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataProduct[0]);
      }, 2000);
    });
  };
  
  export default obtenerProductos;
  export { getProduct };
  