const express = require("express");
const mongoose = require("mongoose");
const app = require("./index");
const { ObjectId } = require("mongodb");

const port = process.env.PORT || 5000;
mongoose
  .connect(
    "mongodb+srv://pupilit:pupilit@cluster0.ctx4wra.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("app is running");
  });

const reviewShema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  reviewText: {
    type: String,
    required: true,
  },
  reviewNumber: {
    type: Number,
    required: true,
  },
});
const reviewModel = mongoose.model("review", reviewShema);

const softwareSchem = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
const courseSchema = mongoose.Schema({
  subTitle: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  CourseDuration: {
    type: String,
    required: true,
  },
  Lecture: {
    type: Number,
    required: true,
  },
  Project: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  CourseOverview: {
    type: String,
    required: true,
  },
  CourseCurriculum: {
    type: [],
    required: true,
  },
  Software: {
    type: [],
    required: true,
  },
});
const coursemodel = mongoose.model("Course", courseSchema);

const studentSchema = mongoose.Schema({
  name: {
    type: String,
  },
  addmission: {
    type: String,
  },
  mother: {
    type: String,
  },
  gender: {
    type: String,
  },
  school: {
    type: String,
  },
  phone: {
    type: String,
  },
  studentId: {
    type: String,
  },
  father: {
    type: String,
  },
  birthday: {
    type: String,
  },
  Blood: {
    type: String,
  },
  course: {
    type: String,
  },
  present: {
    type: String,
  },
  permanent: {
    type: String,
  },
  city: {
    type: String,
  },
  postal: {
    type: String,
  },
});

const projectSchema = mongoose.Schema({
  name: { type: String },
  category: { type: String },
  aboutYou: { type: String },
  img: { type: String },
});

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  role: { type: String },
});
const userModel = mongoose.model("user", userSchema);

const projectModel = mongoose.model("addproject", projectSchema);

const studentModel = mongoose.model("Student", studentSchema);

app.post("/user", async (req, res) => {
  const user = req.body;
  const result = await userModel.create(user);
  res.send(result);
});
app.get("/user", async (req, res) => {
  const filter = {};
  const result = await userModel.find(filter);
  res.send(result);
});
app.get("/admin", async (req, res) => {
  const email = req.query.email;
  const filter = { email: email };
  const result = await userModel.find(filter);
  res.send(result);
});
app.post("/student", async (req, res) => {
  const student = req.body;
  const result = await studentModel.create(student);
  res.send(result);
});
app.get("/student", async (req, res) => {
  const filter = {};
  const result = await studentModel.find(filter);
  res.send(result);
});
app.get("/student/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };
  const result = await studentModel.find(filter);
  res.send(result);
});
app.post("/course", async (req, res) => {
  const course = req.body;
  console.log(course);
  const result = await coursemodel.create(course);
  res.send(course);
});

app.get("/allcourse", async (req, res) => {
  const filter = {};
  const result = await coursemodel.find(filter);
  console.log(result);
  res.send(result);
});
app.get("/course/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };
  const result = await coursemodel.findOne(filter);
  res.send(result);
});

app.post("/review", async (req, res) => {
  const review = req.body;
  const result = await reviewModel.create(review);
  res.send(review);
});
app.get("/review/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { id: id };
  const result = await reviewModel.find(filter);
  res.send(result);
});

app.post("/addproject", async (req, res) => {
  const project = req.body;
  const result = await projectModel.create(project);
  res.send(result);
});
app.get("/addproject", async (req, res) => {
  const filter = {};
  const result = await projectModel.find(filter);
  res.send(result);
});
app.get("/addproject/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };
  const result = await projectModel.find(filter);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening on  ${port}`);
});
