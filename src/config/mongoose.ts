import mongoose from "mongoose";

class Mongoose {
  private password: string;
  private dbname: string;

  constructor(password: string, dbname: string) {
    this.password = password;
    this.dbname = dbname;
  }

  async connect(): Promise<void | TypeErrorConstructor> {
    await mongoose.connect(
      `mongodb+srv://luancma_admin:${this.password}@cluster-test.imbnp.mongodb.net/${this.dbname}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }
    ).catch(error => {
      throw new Error(error)
    })
  }
}
export default Mongoose;