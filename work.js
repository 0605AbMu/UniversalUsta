const jfs = require("jsonfile")

let data = {
mainAdminID:"",
adminID:["1388162676"],
usersID:[],
workerID:[],
clientID:[],
workerData:[],
clientData:[],
userKey:[],
tempId:[],
tempData:[],
waitID:[],
waitData:[],
groupId: "-1001212789211",
blokID:[],
messageId:[],
workData:[],
codeWork:[],
workID:[],
userData:[],
workDataTemp:[],
groupMessageID: [],
day: 15
}

jfs.writeFileSync("data/data.JSON", data, {spaces:" "});