const index = async (req, res) => {
  console.log(req.file);
  res.status(200).send({ message: 'Bootcamp api' });
};

export default index;
