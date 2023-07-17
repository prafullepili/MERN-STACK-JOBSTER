require('dotenv').config();
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const mockData = require('./mock_data.json')
const Job = require('./models/Job');
const connectDB = require('./db/connect');


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI_LOCAL)
        // await Job.create(mockData);
        // console.log('Success !!!');
        // process.exit(1);
        readline.question("Do you really want to delete data from database -> Y/N ?", async confirmation => {
            if (confirmation == 'Y') {
                await Job.deleteMany();
                await Job.create(mockData);
                console.log("deleted and created Success!!")
                process.exit()
            } else if (confirmation == "N") {
                await Product.create(jsonProducts);
                console.log('created Success!!');
                process.exit()
            } else {
                process.exit();
            }
        })
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

start();