exports.createPages =async({actions,graphql,reporter})=>{
    const resultados = await graphql(`
    query{
        allDatoCmsHabitacion{
          nodes{
            slug
          }
        }
      }
    `);

    if(resultados.errors){
        reporter.panic('Hubo un error',resultados.errors);
    }

    const habitaciones = resultados.data.allDatoCmsHabitacion.nodes;

    habitaciones.forEach(habitacion =>{
      actions.createPage({
        path: habitacion.slug,
        component: require.resolve('./src/components/habitaciones.js'),
        context: {
          slug: habitacion.slug
        }
      })
    })
}