const  {faker} =  require("@faker-js/faker");


let fn_facker = async (ctx, next) => {
  const randomName = faker.name.fullName(); // Rowan Nikolaus
  const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
  ctx.response.body = {
    name: randomName,
    email: randomEmail,
  };
};;

module.exports = {
  "GET /facker": fn_facker,
};
