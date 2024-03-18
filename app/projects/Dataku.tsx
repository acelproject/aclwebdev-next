// import React from 'react'

// const Dataku = () => {
//     useEffect(async() => {
//         const res = await fetch("http://localhost:3000/api/products", {
//         cache: "no-store",
//         // next: {
//         //   // revalidate: 10
//         //   tags: ["products"],
//         // },
//       });
    
//       if (!res.ok) {
//         throw new Error("gagal memuat data");
//       }
    
//       return res.json();
//       }, []);
//   return (
//     <div>
//         {myData.data.map((item, i) => (
//         <div key={i}>{item.nama}</div>
//       ))}
//     </div>
//   )
// }

// export default Dataku