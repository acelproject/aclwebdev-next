// export async function POST(request: NextRequest) {
//     const { searchParams } = new URL(request.url);
//     const id = searchParams.get("id");
  
//     if (id) {
//       // const detailProduct = data.find((item) => item.id === Number(id));
//       const detailProduct = await retrieveDataById("projects", id);
//       if (detailProduct) {
//         return NextResponse.json({
//           status: 200,
//           message: "berhasil",
//           data: detailProduct,
//         });
//       }
//       return NextResponse.json({
//         status: 404,
//         message: "Not found",
//         data: {},
//       });
//     }
//     const products = await retrieveData("projects");
  
//     return NextResponse.json({
//       status: 200,
//       message: "berhasil",
//       data:products,
//     });
//   }