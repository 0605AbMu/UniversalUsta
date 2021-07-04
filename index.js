const {Telegraf, Extra, Markup} = require("telegraf");

const jfs = require("jsonfile")
const exec = require("child_process").exec
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
const token= "1004145224:AAHzcss2WGC_RR8a8F7X3Lfu8T37b-08K_s";
let til = [
    [],
    [],
    [],
    []
    
 ]
//Count DAy################################
function countDays(date_ini, date_end) {

 
    let diff = date_end.getTime() - date_ini.getTime();
  
    return Math.floor(diff / 86400000)+1;
  }
  let f = false;
//##################################
 //Til #####################################
til  = jfs.readFileSync("data/language.JSON");
data = jfs.readFileSync("data/data.JSON");

let words = (key, index)=>{
    return til[ data.userKey[data.usersID.indexOf(key.toString())] ][index];
}


  
    function keygen(){
        
        return "A"+data.workData.length.toString()

        }
        




//##########################################
const bot = new Telegraf(token);


let lButton  = Markup.inlineKeyboard([{text:"LOTIN", callback_data:"UZ"},
{text:"КРИЛЛ", callback_data:"KRILL"},
{text:"РУС", callback_data:"RU"},
{text:"ENG", callback_data:"EN"}
], {columns: 2})


//#Start Method################################################################

bot.start(async(msg)=>{
try{
    

if ( data.usersID.indexOf(msg.chat.id.toString())==-1){
    data.usersID.push(msg.chat.id.toString());
    data.userKey.push(0)
    data.userData.push({status:"❌"});

    msg.replyWithHTML(words(msg.chat.id, 0))
    msg.replyWithHTML(words(msg.chat.id,2), Extra.markup(lButton));
} else{

    

    msg.replyWithHTML(words(msg.chat.id, 1))

    if ((data.clientID.indexOf(msg.chat.id.toString())!=-1) || (data.workerID.indexOf(msg.chat.id.toString())!=-1)){
        msg.reply(words(msg.chat.id, 82), Extra.HTML(true).markup(Markup.keyboard(words(msg.chat.id, 52),{columns:2}).resize(true).oneTime(true)));

    } else{

        if (data.adminID.indexOf(msg.chat.id.toString())!=-1){
           await  msg.replyWithHTML(words(msg.chat.id, 46), Extra.markup(Markup.keyboard(words(msg.chat.id, 47), {columns:2}).resize(true).oneTime(true)));
            return
            }
            

msg.replyWithHTML(words(msg.chat.id, 3), main(msg.chat.id))


    }



}

data.tempData.splice(data.tempId.indexOf(msg.chat.id),1);
    data.tempId.splice(data.tempId.indexOf(msg.chat.id),1);
    







jfs.writeFileSync("data/data.JSON", data, {spaces:" " });
}catch(e){
  
}

})


//End Method################################################################

//#create POST##########################################
let picPost  = (v)=>{

return [
    {type:"photo", media:v.r3x4},
    {type:"photo", media:v.pass1},
    {type:"photo", media:v.pass2},
    {type:"photo", media:v.INN},
    {type:"photo", media:v.kur1},
    {type:"photo", media:v.kur2},
    {type:"photo", media:v.kur3},
    {type:"photo", media:v.chek}
    
]
}


let post = (id,v, username)=>{
let rt = `${words(id, 37)[0]} ${data.usersID.length}

${words(id, 37)[11]} #${String(v.tur).split(" ")[0]}_${String(v.tur).split(" ")[1]}

${words(id, 37)[3]} ${id}
${words(id, 37)[4]} @${username}
${words(id, 37)[1]} ${v.ism}
${words(id, 37)[2]} ${v.sana}
${words(id, 37)[5]} ${v.tel1}

${words(id, 37)[6]} ${v.tel2}
${words(id, 37)[7]} ${v.teltg}

${words(id, 37)[8]} ${v.vil}
${words(id, 37)[9]} ${v.manzil}

${words(id, 37)[10]} ${v.soha}

${words(id, 88)} !_${v.dayOfReg}!_

${words(id, 41)}
`
return rt;

}

let klpost = (id,v, username)=>{
let rt = `${words(id, 37)[0]} ${data.usersID.length}

${words(id, 37)[11]} #${String(v.tur).split(" ")[0]}_${String(v.tur).split(" ")[1]}

${words(id, 37)[3]} ${id}
${words(id, 37)[4]} @${username}
${words(id, 37)[1]} ${v.ism}
${words(id, 37)[2]} ${v.sana}
${words(id, 37)[5]} ${v.tel1}

${words(id, 37)[6]} ${v.tel2}
${words(id, 37)[7]} ${v.teltg}

${words(id, 37)[8]} ${v.vil}
${words(id, 37)[9]} ${v.manzil}
    `
    return rt;
    
    }


let workPost = (v,id,b)=>{
let rt = ""
    if (b){
rt = `
╯▅╰╱▔▔▔▔▔▔▔╲╯╯☼       UniversalUsta.uz 
▕▕╱╱╱╱╱╱╱╱┛▂╲╲╭   +998 33 491 99 95
╱▂▂▂▂▂▂╱╱┏▕╋▏╲╲
▔▏▂┗┓▂▕▔┛▂┏▔▂▕▔ 
▕▕╋▏▕╋▏▏▕┏▏▕╋▏▏

<b>${words(id,68 )[7]}:</b> ${data.workID.length}

<b>${words(id,68 )[0]}:</b> ${v.kindWork}
<b>${words(id,68 )[1]}:</b> #${v.codeWork}

<b>${words(id,68 )[2]}:</b> ${v.hududWork}
<b>${words(id,68 )[3]}:</b> ${v.manzilWork}

<b>${words(id,68 )[4]}:</b> ${v.tel1}
<b>${words(id,68 )[5]}:</b> ${v.tel2}
<b>${words(id,68 )[6]}:</b> ${v.teltg}

  👇Уста керак булса👇

  ☎️ +998 93 491 99 95


╔╦═•👷‍♂•👨‍🔧•👷‍♂•👨‍🔧•═╦╗
      @UniversalUsta_uz
╚╩═•👷‍♂•👨‍🔧•👷‍♂👨‍🔧•═╩╝
`


}
else{
    rt = `
╯▅╰╱▔▔▔▔▔▔▔╲╯╯☼       UniversalUsta.uz 
▕▕╱╱╱╱╱╱╱╱┛▂╲╲╭   +998 33 491 99 95
╱▂▂▂▂▂▂╱╱┏▕╋▏╲╲
▔▏▂┗┓▂▕▔┛▂┏▔▂▕▔ 
▕▕╋▏▕╋▏▏▕┏▏▕╋▏▏

    <b>${words(id,68 )[7]}</b>: ${data.workID.length}

    <b>${words(id,68 )[0]}</b>: ${v.kindWork}
    <b>${words(id,68 )[1]}</b>: #${v.codeWork}
    
    <b>${words(id,68 )[2]}</b>: ${v.hududWork}
    <b>${words(id,68 )[3]}</b>: ${v.manzilWork}

  👇Уста керак булса👇

  ☎️ +998 93 491 99 95
 
 
╔╦═•👷‍♂•👨‍🔧•👷‍♂•👨‍🔧•═╦╗
          @UniversalUsta_uz
╚╩═•👷‍♂•👨‍🔧•👷‍♂👨‍🔧•═╩╝
`    


}

return rt;
}
//End Post##########################
let st  ="";
bot.on(["text","photo", "contact"], async(msg)=>{

try{


switch (msg.message.text) {
    case words(msg.chat.id, 4)[0]:
        msg.replyWithHTML("<b>⚠️Ro`yxatdan o`tishdan oldin <u>QUYIDAGILAR BILAN TANISHING.</u></b>\n"+words(msg.chat.id, 44)+"\nRozi bo`lsangiz tanishdim tugmasini bosing, aks holda bekor qilish tugmasini. ", Extra.markup(Markup.keyboard([words(msg.chat.id, 8)[0],words(msg.chat.id, 8)[4] ], {columns:2}).resize(true).oneTime(true)))        
return 
        break;

case words(msg.chat.id, 4)[1]:
    
msg.replyWithHTML(`<b>📝№${data.usersID.indexOf(msg.chat.id.toString())+1};

🆔:${msg.chat.id};
${words(msg.chat.id, 5)[0]}: <i>${msg.chat.first_name}</i>;
${words(msg.chat.id, 5)[1]}: <i>@${msg.chat.username}</i>;
    
status: ${data.userData[data.usersID.indexOf(msg.chat.id.toString())].status};
olingan ishlar: ${data.workData.reduce((val, itm) => itm.who == msg.chat.id.toString() ? val + 1 : val + 0, 0)};

</b>
`)
return 
break;

case words(msg.chat.id, 4)[2]:
    msg.replyWithHTML("<b>🛠Sozlashni amalga oshirishingiz mumkin:🛠</b>", Extra.markup(lButton));

break;

case words(msg.chat.id, 4)[3]:


return 
break;

case words(msg.chat.id, 8)[0]:
    msg.reply(words(msg.chat.id, 3), main(msg.chat.id));
    data.tempData.splice(data.tempId.indexOf(msg.chat.id),1);
    data.tempId.splice(data.tempId.indexOf(msg.chat.id),1);
    
return 
break;
case words(msg.chat.id, 32)[0]:
    data.tempData.splice(data.tempId.indexOf(msg.chat.id),1);
    data.tempId.splice(data.tempId.indexOf(msg.chat.id),1);
    msg.reply(words(msg.chat.id, 33), main(msg.chat.id));
return 
break;

case words(msg.chat.id, 32)[1]:
    msg.replyWithHTML(words(msg.chat.id, 34));
    msg.replyWithHTML(words(msg.chat.id, 35));
    data.tempData[data.tempId.indexOf(msg.chat.id)].status = "chek"

return 
break;



case words(msg.chat.id, 19)[142]:
    data.tempData[data.tempId.indexOf(msg.chat.id)].status = "r3x4"
    if (data.tempData[data.tempId.indexOf(msg.chat.id)].qayta){
        data.tempData[data.tempId.indexOf(msg.chat.id)].qayta = false;
        msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 38), {columns:3}).resize(true).oneTime(true)) );
        data.tempData[data.tempId.indexOf(msg.chat.id)].status=" ";
    return    
        
    } 
    msg.reply(words(msg.chat.id, 22));
    msg.replyWithHTML("<b>"+words(msg.chat.id, 24)+"</b>");
    msg.replyWithPhoto({source: "photos/3x4.jpg"},Extra.caption(words(msg.chat.id, 23)))
return 
break;


case words(msg.chat.id, 8)[4]:
    
    if ((data.clientID.indexOf(msg.chat.id.toString())==-1) || ( data.workerID.indexOf(msg.chat.id.toString())==-1) ){

        msg.replyWithHTML(words(msg.chat.id, 9), Extra.markup(Markup.keyboard([words(msg.chat.id, 8)[2], words(msg.chat.id, 8)[3]]).resize(true).oneTime(true)));
        if (data.tempId.indexOf(msg.chat.id)==-1){
        
            data.tempId.push(msg.chat.id);
            data.tempData.push({status:"tur"})
            
        } else {
            data.tempData[data.tempId.indexOf(msg.chat.id)].status  = "tur"
        }
        

    } else{

        msg.replyWithHTML(words(msg.chat.id,83), main(msg.chat.id))
        data.tempData[data.tempId.indexOf(msg.chat.id)].status  = " "
    }

    return 
break;




case words(msg.chat.id, 8)[1]:
  
// if (data.tempId.indexOf(msg.chat.id)==-1){
//     data.tempId.push(msg.chat.id);
//     data.tempData.push({status:"tur"})
    
// } else {
    msg.replyWithHTML(words(msg.chat.id, 10), Extra.markup(Markup.removeKeyboard()));
        
    data.tempData[data.tempId.indexOf(msg.chat.id)].status="ism";

    return 
break;

case "📝":
    if (data.tempData[data.tempId.indexOf(msg.chat.id)].tur==words(msg.chat.id, 8)[2])
msg.replyWithHTML(words(msg.chat.id, 39), Extra.markup(Markup.keyboard(words(msg.chat.id, 45), {columns:2}).resize(true).oneTime(true))) 
else 
msg.replyWithHTML(words(msg.chat.id, 39), Extra.markup(Markup.keyboard(words(msg.chat.id, 38), {columns:2}).resize(true).oneTime(true))) 
data.tempData[data.tempId.indexOf(msg.chat.id)].qayta = true;
return
break;

case "✅":
    data.waitID.push(msg.chat.id.toString());
    
    if ( data.tempData[data.tempId.indexOf(msg.chat.id)].tur==words(msg.chat.id, 8)[3]){
    data.waitData.push({text:post(msg.chat.id, data.tempData[data.tempId.indexOf(msg.chat.id)], msg.chat.username), photo: picPost( data.tempData[data.tempId.indexOf(msg.chat.id)] )   }  )
    
    }
  
    else{

    data.waitData.push({text:klpost(msg.chat.id, data.tempData[data.tempId.indexOf(msg.chat.id)], msg.chat.username), photo: undefined  }  )
    
    }

    


    msg.replyWithHTML(words(msg.chat.id, 43), Extra.markup( Markup.inlineKeyboard([

    {text:"Do`stlarga ulashish", switch_inline_query:"post ulashish"}

    ])  ));
    jfs.writeFileSync("data/data.JSON", data, {spaces:" "});
    
return
break;

case words(msg.chat.id, 63)[1]:
msg.replyWithHTML(words(msg.chat.id, 65), Extra.markup(Markup.keyboard(words(msg.chat.id, 66), {columns:3}).resize(true).oneTime(true)));
data.tempData[data.tempId.indexOf(msg.chat.id)].status = "turDagavor"
return
break;

case words(msg.chat.id, 63)[0]:

data.tempData[data.tempId.indexOf(msg.chat.id)].status = "ish_tur"

break;

case words(msg.chat.id, 52)[5]:
    
    msg.replyWithHTML(words(msg.chat.id, 98), Extra.markup( Markup.inlineKeyboard([

        {text:"Do`stlarga ulashish", switch_inline_query:"post ulashish"}
    
        ])  ));
        
return
break;

case words(msg.chat.id, 52)[4]:
case words(msg.chat.id, 4)[3]:
    
    msg.replyWithHTML( `<b>
╯▅╰╱▔▔▔▔▔▔▔╲╯╯☼       UniversalUsta.uz 
▕▕╱╱╱╱╱╱╱╱┛▂╲╲╭   +998 33 491 99 95
╱▂▂▂▂▂▂╱╱┏▕╋▏╲╲
▔▏▂┗┓▂▕▔┛▂┏▔▂▕▔ 
▕▕╋▏▕╋▏▏▕┏▏▕╋▏▏
Assalomu Alaykum✋🏻. UniversalUsta.uz jamoasining rasmiy botiga Xush kelibsiz!!!
🗣UniversalUsta.uz jamoasi👥 sizga quyidagi taqdim etadi😱:
🖲<i>Biz bilan istalgan vaqtda istalgan joyda o'z qurilish loyihangiz uchun ustalarni online tarzda oson chaqiring.
🖲Biz bilan istalgan vaqtda istalgan joyda o'zingizga mos ish topishingiz mumkin.</i>

📝Botdan ro'yxatdan o'ting, 🔗Bizga qo'shiling, 🆔 raqam oling va o'z orzularingiz sari biz orqali qadam qo'ying.\n

╔╦═•👷‍♂️•👨‍🔧•👷‍♂️•👨‍🔧•═╦╗
    @UniversalUsta_uz
╚╩═•👷‍♂️•👨‍🔧•👷‍♂️👨‍🔧•═╩╝</b>`);
        
return
break;




default:
        break;
}



switch (msg.message.text) {
    case words(msg.chat.id, 38)[0]:
        data.tempData[data.tempId.indexOf(msg.chat.id)].qayta = true;
        msg.replyWithHTML(words(msg.chat.id, 10));
        data.tempData[data.tempId.indexOf(msg.chat.id)].status = "ism";
        return;
        break;
        case words(msg.chat.id, 38)[1]:
            data.tempData[data.tempId.indexOf(msg.chat.id)].qayta = true;
            msg.replyWithHTML(words(msg.chat.id, 11));
            data.tempData[data.tempId.indexOf(msg.chat.id)].status = "sana";
            return;
            break;
    
            case words(msg.chat.id, 38)[2]:
                data.tempData[data.tempId.indexOf(msg.chat.id)].qayta = true;
                msg.replyWithHTML(words(msg.chat.id, 15));
                data.tempData[data.tempId.indexOf(msg.chat.id)].status = "tel1";
                return;
                break;
    
                case words(msg.chat.id, 38)[3]:
                    data.tempData[data.tempId.indexOf(msg.chat.id)].qayta = true;
                    msg.replyWithHTML(words(msg.chat.id, 16));
                    data.tempData[data.tempId.indexOf(msg.chat.id)].status = "tel2";
                    return;
                    break;
    
                    case words(msg.chat.id, 38)[4]:
                        data.tempData[data.tempId.indexOf(msg.chat.id)].qayta = true;
                        msg.replyWithHTML(words(msg.chat.id, 17));
                        data.tempData[data.tempId.indexOf(msg.chat.id)].status = "teltg";
                        return;
                        break;
                        case words(msg.chat.id, 38)[5]:
                            data.tempData[data.tempId.indexOf(msg.chat.id)].qayta = true;
                            msg.replyWithHTML(words(msg.chat.id, 13),Extra.markup(Markup.keyboard(words(msg.chat.id, 12), {columns:3}).resize(true).oneTime(true)));
                            data.tempData[data.tempId.indexOf(msg.chat.id)].status = "vil";
                            return;
                            break;
                    
                            case words(msg.chat.id, 38)[6]:
                                data.tempData[data.tempId.indexOf(msg.chat.id)].qayta = true;
                                msg.replyWithHTML(words(msg.chat.id, 14));
                                data.tempData[data.tempId.indexOf(msg.chat.id)].status = "manzil";
                                return;
                                break;
                                case words(msg.chat.id, 38)[7]:
                                    data.tempData[data.tempId.indexOf(msg.chat.id)].qayta = true;
                                    data.tempData[data.tempId.indexOf(msg.chat.id)].soha="";
                                    msg.replyWithHTML(words(msg.chat.id, 18),Extra.markup(Markup.keyboard(words(msg.chat.id, 19), {columns:3}).resize(true).oneTime(true)));
                                    data.tempData[data.tempId.indexOf(msg.chat.id)].status = "soha";
                                    return;
                                    break;

                                    case words(msg.chat.id, 38)[8]:
                                        data.tempData[data.tempId.indexOf(msg.chat.id)].qayta = true;
                                        msg.replyWithHTML(words(msg.chat.id, 23), Extra.markup(Markup.removeKeyboard()));
                                        data.tempData[data.tempId.indexOf(msg.chat.id)].status = "r3x4";
                                        return;
                                        break;

                                        
                                        case words(msg.chat.id, 38)[9]:
                                        data.tempData[data.tempId.indexOf(msg.chat.id)].qayta = true;
                                        msg.replyWithHTML(words(msg.chat.id, 25), Extra.markup(Markup.removeKeyboard()));
                                        data.tempData[data.tempId.indexOf(msg.chat.id)].status = "pass1";
                                        return;
                                        break;

                                        
                                        case words(msg.chat.id, 38)[10]:
                                        data.tempData[data.tempId.indexOf(msg.chat.id)].qayta = true;
                                        msg.replyWithHTML(words(msg.chat.id, 26), Extra.markup(Markup.removeKeyboard()));
                                        data.tempData[data.tempId.indexOf(msg.chat.id)].status = "pass2";
                                        return;
                                        break;

                                        
                                        case words(msg.chat.id, 38)[11]:
                                        data.tempData[data.tempId.indexOf(msg.chat.id)].qayta = true;
                                        msg.replyWithHTML(words(msg.chat.id, 27), Extra.markup(Markup.removeKeyboard()));
                                        data.tempData[data.tempId.indexOf(msg.chat.id)].status = "INN";
                                        return;
                                        break;

                                        
                                        case words(msg.chat.id, 38)[12]:
                                        data.tempData[data.tempId.indexOf(msg.chat.id)].qayta = true;
                                        msg.replyWithHTML(words(msg.chat.id, 28), Extra.markup(Markup.removeKeyboard()));
                                        data.tempData[data.tempId.indexOf(msg.chat.id)].status = "kur1";
                                        return;
                                        break;

                                        
                                        case words(msg.chat.id, 38)[13]:
                                        data.tempData[data.tempId.indexOf(msg.chat.id)].qayta = true;
                                        msg.replyWithHTML(words(msg.chat.id, 29), Extra.markup(Markup.removeKeyboard()));
                                        data.tempData[data.tempId.indexOf(msg.chat.id)].status = "kur2";
                                        return;
                                        break;

                                        
                                        case words(msg.chat.id, 38)[14]:
                                        data.tempData[data.tempId.indexOf(msg.chat.id)].qayta = true;
                                        msg.replyWithHTML(words(msg.chat.id, 30), Extra.markup(Markup.removeKeyboard()));
                                        data.tempData[data.tempId.indexOf(msg.chat.id)].status = "kur3";
                                        return;
                                        break;

                                        case words(msg.chat.id, 38)[15]:
                                            data.tempData[data.tempId.indexOf(msg.chat.id)].qayta = true;
                                            msg.replyWithHTML(words(msg.chat.id, 42), Extra.markup(Markup.removeKeyboard()));
                                            data.tempData[data.tempId.indexOf(msg.chat.id)].status = "chek";
                                            return;
                                            break;
    
                                        
                            
                                            case words(msg.chat.id, 38)[16]:
     if (data.tempData[data.tempId.indexOf(msg.chat.id)].tur==words(msg.chat.id, 8)[3]){
        await msg.replyWithMediaGroup(picPost(data.tempData[data.tempId.indexOf(msg.chat.id)]));
   await msg.replyWithHTML(post(msg.chat.id, data.tempData[data.tempId.indexOf(msg.chat.id)], msg.chat.username), Extra.markup(Markup.keyboard(["📝","✅"],{columns:2}).resize(true).oneTime(true)))
   
     } else{
        await msg.replyWithHTML(klpost(msg.chat.id, data.tempData[data.tempId.indexOf(msg.chat.id)], msg.chat.username), Extra.markup(Markup.keyboard(["📝","✅"],{columns:2}).resize(true).oneTime(true)))

     }

   return;
   break;


    default:
        break;

}

if (data.tempData[data.tempId.indexOf(msg.chat.id)]!=undefined){

switch (data.tempData[data.tempId.indexOf(msg.chat.id)].status) {
    
    case "tur":
        if (msg.message.text==words(msg.chat.id, 8)[2]){
            if (data.clientID.indexOf(msg.chat.id.toString())!=-1){
                msg.replyWithHTML(words(msg.chat.id, 92), main(msg.chat.id));
                return
            }
        }

        
        if (msg.message.text==words(msg.chat.id, 8)[3]){
            if (data.workerID.indexOf(msg.chat.id.toString())!=-1){
                msg.replyWithHTML(words(msg.chat.id, 92), main(msg.chat.id));
                return
            }
        }
        data.tempData[data.tempId.indexOf(msg.chat.id)].tur = msg.message.text;
        
        if (data.tempData[data.tempId.indexOf(msg.chat.id)].tur==words(msg.chat.id, 8)[3]){
            data.tempData[data.tempId.indexOf(msg.chat.id)].status="qer";
            msg.replyWithHTML("<b>⚠️Ro`yxatdan o`tishdan oldin <u>QUYIDAGILAR BILAN TANISHING.</u></b>\n"+words(msg.chat.id, 7)+"\nRozi bo`lsangiz tanishdim tugmasini bosing, aks holda bekor qilish tugmasini. ", Extra.markup(Markup.keyboard([words(msg.chat.id, 8)[0],words(msg.chat.id, 8)[1] ], {columns:2}).resize(true).oneTime(true)))        
 return
 
        } else {


            msg.replyWithHTML(words(msg.chat.id, 10), Extra.markup(Markup.removeKeyboard()));
        
        
            data.tempData[data.tempId.indexOf(msg.chat.id)].status = "ism"

        }


        return
            break;



    default:
        break;
}

    

}




if ( (data.tempData[data.tempId.indexOf(msg.chat.id)]!=undefined) && (data.tempData[data.tempId.indexOf(msg.chat.id)].tur==words(msg.chat.id, 8)[2]) ) {
    
    let v = data.tempData[data.tempId.indexOf(msg.chat.id)];
    switch (v.status) {
        case "ism":
            msg.reply(v.ism);
            v.ism = msg.message.text;
            if (v.qayta){
                v.qayta = false;
                msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 45), {columns:2}).resize(true).oneTime(true)) );
                v.status=" ";
            return    
                
            } 
    
                msg.reply(words(msg.chat.id, 11));
                v.status = "sana"
            return 
                break;
                
                case "sana":
                    v.sana = msg.message.text;
                    if (v.qayta){
                        v.qayta = false;
                        msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 45), {columns:2}).resize(true).oneTime(true)) );
                        v.status=" ";
                    return    
                        
                    }       
                    msg.reply(words(msg.chat.id, 13), Extra.markup(Markup.keyboard(words(msg.chat.id, 12), {columns:2}).resize(true).oneTime(true)));
                    v.status = "vil"
                    return
                        break;
                        
                        case "vil":
                            v.vil = msg.message.text;
                            if (v.qayta){v.qayta = false;
                                msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 45), {columns:2}).resize(true).oneTime(true)) );
                                v.status=" ";
                            return    
                                
                            } 
                            msg.reply(words(msg.chat.id, 14), Extra.markup(Markup.removeKeyboard()))
                            v.status = "manzil"
                            return
                                break;
                                
                        case "manzil":
                            v.manzil = msg.message.text;
                            if (v.qayta){v.qayta = false;
                                msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 45), {columns:2}).resize(true).oneTime(true)) );
                                v.status=" ";
                            return    
                                
                            } 
                            msg.reply(words(msg.chat.id, 15))
                            v.status = "tel1"
                            return
                                break;
                                
                        case "tel1":
                            v.tel1 = msg.message.text;
                            if (v.qayta){v.qayta = false;
                                msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 45), {columns:2}).resize(true).oneTime(true)) );
                                v.status=" ";
                            return    
                                
                            } 
                            msg.reply(words(msg.chat.id, 16))
                            v.status = "tel2"
                            return
                                break;
                           
                        case "tel2":
                            v.tel2 = msg.message.text;
                            if (v.qayta){v.qayta = false;
                                msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 45), {columns:2}).resize(true).oneTime(true)) );
                                v.status=" ";
                            return    
                                
                            } 
                            //Extra.markup(Markup.keyboard([Markup.contactRequestButton("Telegram nomerimni ulashish")]).resize() )
                            msg.reply(words(msg.chat.id, 17), await Extra.markup(Markup.keyboard([Markup.contactRequestButton(words(msg.chat.id, 73)[0])]).resize(true).oneTime(true)))
                            v.status = "teltg"
                            return
                                break;
    
                        case "teltg":
                             v.teltg = await msg.update.message.contact.phone_number;
                                    if (v.qayta){v.qayta = false;
                                         msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 45), {columns:2}).resize(true).oneTime(true)) );
                                        v.status=" ";
                                    return    
                                        
                                    } 
                                    
                                    v.status = "end"
                                    v.soha = "";
                                    

                                        case "end":

                                            msg.replyWithHTML(klpost(msg.chat.id, v, msg.chat.username));
                                            msg.replyWithHTML(words(msg.chat.id, 36), Extra.markup(Markup.keyboard(["📝","✅"],{columns:2}).resize(true).oneTime(true)))
                                        return 
                                        break;
    
    
        default:



            break;
    }


}


if ( (data.tempData[data.tempId.indexOf(msg.chat.id)]!=undefined) && (data.tempData[data.tempId.indexOf(msg.chat.id)].tur==words(msg.chat.id, 8)[3]) ) {
    let v = data.tempData[data.tempId.indexOf(msg.chat.id)];
switch (data.tempData[data.tempId.indexOf(msg.chat.id)].status) {


    case "ism":
        msg.reply(v.ism);
        v.ism = msg.message.text;
        if (v.qayta){
            v.qayta = false;
            msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 38), {columns:2}).resize(true).oneTime(true)) );
            v.status=" ";
        return    
            
        } 

            msg.reply(words(msg.chat.id, 11));
            v.status = "sana"
        return 
            break;
            
            case "sana":
                v.sana = msg.message.text;
                if (v.qayta){
                    v.qayta = false;
                    msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 38), {columns:2}).resize(true).oneTime(true)) );
                    v.status=" ";
                return    
                    
                }       
                msg.reply(words(msg.chat.id, 13), Extra.markup(Markup.keyboard(words(msg.chat.id, 12), {columns:2}).resize(true).oneTime(true)));
                v.status = "vil"
                return
                    break;
                    
                    case "vil":
                        v.vil = msg.message.text;
                        if (v.qayta){v.qayta = false;
                            msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 38), {columns:2}).resize(true).oneTime(true)) );
                            v.status=" ";
                        return    
                            
                        } 
                        msg.reply(words(msg.chat.id, 14), Extra.markup(Markup.removeKeyboard()))
                        v.status = "manzil"
                        return
                            break;
                            
                    case "manzil":
                        v.manzil = msg.message.text;
                        if (v.qayta){v.qayta = false;
                            msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 38), {columns:2}).resize(true).oneTime(true)) );
                            v.status=" ";
                        return    
                            
                        } 
                        msg.reply(words(msg.chat.id, 15))
                        v.status = "tel1"
                        return
                            break;
                            
                    case "tel1":
                        v.tel1 = msg.message.text;
                        if (v.qayta){v.qayta = false;
                            msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 38), {columns:2}).resize(true).oneTime(true)) );
                            v.status=" ";
                        return    
                            
                        } 
                        msg.reply(words(msg.chat.id, 16))
                        v.status = "tel2"
                        return
                            break;
                       
                    case "tel2":
                        v.tel2 = msg.message.text;
                        if (v.qayta){v.qayta = false;
                            msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 38), {columns:2}).resize(true).oneTime(true)) );
                            v.status=" ";
                        return    
                            
                        } 
                        //Extra.markup(Markup.keyboard([Markup.contactRequestButton("Telegram nomerimni ulashish")]).resize() )
                        msg.reply(words(msg.chat.id, 17), await Extra.markup(Markup.keyboard([Markup.contactRequestButton(words(msg.chat.id, 73)[0])]).resize(true).oneTime(true)))
                        v.status = "teltg"
                        return
                            break;

                    case "teltg":
                         v.teltg = await msg.update.message.contact.phone_number;
                                if (v.qayta){v.qayta = false;
                                     msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 38), {columns:2}).resize(true).oneTime(true)) );
                                    v.status=" ";
                                return    
                                    
                                } 
                                msg.replyWithHTML(words(msg.chat.id, 18), Extra.markup(Markup.keyboard(words(msg.chat.id, 19), {columns:3}).resize(true).oneTime(true)))
                                v.status = "soha"
                                v.soha = "";
                                return
                                    break;
                    case "soha":
                                        v.soha = v.soha+msg.message.text+"(";
                                        msg.reply(words(msg.chat.id, 20))
                                        v.status = "tajriba"
                                        return
                                            break;
                                  
                    case "tajriba":
                        v.soha = v.soha+"tajribasi: "+msg.message.text+", ";
                        
                        msg.replyWithHTML(words(msg.chat.id, 62), Extra.markup(Markup.keyboard(words(msg.chat.id, 63), {columns:2}).resize(true).oneTime(true)))
                        
                        return
                            break;
                            case "ish_tur":
                            v.soha = v.soha+msg.message.text+"->"
                            msg.replyWithHTML(words(msg.chat.id, 64), Extra.markup(Markup.removeKeyboard()));
                            v.status = "pul"
                            return
                            break
                            case "turDagavor":
                              v.soha = v.soha+words(msg.chat.id,63)[1]+": "+msg.message.text+"->";
                              msg.replyWithHTML(msg.message.text+words(msg.chat.id, 67));
                              v.status = "pul"
                            return
                            break;
                            case "pul":
                                v.soha =  v.soha+msg.message.text+");\n";
                                msg.reply(words(msg.chat.id, 18), Extra.markup(Markup.keyboard(words(msg.chat.id, 19), {columns:3}).resize(true).oneTime(true)))
                                v.status = "soha"
                    break;
                        
                    case "r3x4":
                        v.r3x4 = msg.message.photo[0].file_id;
                        if (v.qayta){v.qayta = false;
                            msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 38), {columns:2}).resize(true).oneTime(true)) );
                            v.status=" ";
                        return    
                            
                        } 
                        msg.replyWithHTML(words(msg.chat.id, 24), Extra.markup(Markup.removeKeyboard()));
                        msg.replyWithPhoto({source: "photos/passport_1.jpg"}, {caption:words(msg.chat.id, 25), parse_mode:"HTML"});
                        v.status = "pass1"
                        return
                        break;
                    case "pass1":
                            v.pass1 = msg.message.photo[0].file_id;
                            if (v.qayta){v.qayta = false;
                                msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 38), {columns:2}).resize(true).oneTime(true)) );
                                v.status=" ";
                            return    
                                
                            } 
                            msg.replyWithHTML(words(msg.chat.id, 24));
                            msg.replyWithPhoto({source: "photos/mult.jpg"}, {caption:words(msg.chat.id, 26), parse_mode:"HTML"});
                            v.status = "pass2"
                            return 
                            break;
                            case "pass2":
                                v.pass2 = msg.message.photo[0].file_id;
                                if (v.qayta){v.qayta = false;
                                    msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 38), {columns:2}).resize(true).oneTime(true)) );
                                    v.status=" ";
                                return    
                                    
                                } 
                                msg.replyWithHTML(words(msg.chat.id, 24));
                                msg.replyWithPhoto({source: "photos/INN.jpg"}, {caption:words(msg.chat.id, 27), parse_mode:"HTML"});
                                v.status = "INN"
                            return
                                break;
                                case "INN":
                                    v.INN = msg.message.photo[0].file_id;
                                    if (v.qayta){v.qayta = false;
                                        msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 38), {columns:2}).resize(true).oneTime(true)) );
                                        v.status=" ";
                                    return    
                                        
                                    } 
                                    msg.replyWithHTML(words(msg.chat.id, 28));
                                   
                                    v.status = "kur1"
                                return
                                    break;
                                    case "kur1":
                                        v.kur1 = msg.message.photo[0].file_id;
                                        if (v.qayta){v.qayta = false;
                                            msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 38), {columns:2}).resize(true).oneTime(true)) );
                                            v.status=" ";
                                        return    
                                            
                                        } 
                                        msg.replyWithHTML(words(msg.chat.id, 29));
                                       
                                        v.status = "kur2"
                                    return
                                        break;
                                
                                        case "kur2":
                                            v.kur2 = msg.message.photo[0].file_id;
                                            if (v.qayta){v.qayta = false;
                                                msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 38), {columns:2}).resize(true).oneTime(true)) );
                                                v.status=" ";
                                            return    
                                                
                                            } 
                                            msg.replyWithHTML(words(msg.chat.id, 30));
                                           
                                            v.status = "kur3"
                                        return
                                            break;
                                            case "kur3":
                                                v.kur3 = msg.message.photo[0].file_id;
                                                if (v.qayta){v.qayta = false;
                                                    msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 38), {columns:2}).resize(true).oneTime(true)) );
                                                    v.status=" ";
                                                return    
                                                    
                                                } 
                                                msg.replyWithHTML(words(msg.chat.id, 31)+"\n"+words(msg.chat.id, 7 ), Extra.markup(Markup.keyboard(words(msg.chat.id, 32), {columns:2}).resize(true).oneTime(true)));
                                               
                                                v.status = " "
                                            return
                                                break;
                                        case "chek":
                                        v.chek = msg.message.photo[0].file_id;
                                        if (v.qayta){v.qayta = false;
                                            msg.replyWithHTML(words(msg.chat.id,40 ),Extra.markup(Markup.keyboard(words(msg.chat.id, 38), {columns:2}).resize(true).oneTime(true)) );
                                            v.status=" ";
                                        return    
                                            
                                        } 
                                        msg.replyWithHTML(words(msg.chat.id, 36), Extra.markup(Markup.keyboard(["📝","✅"],{columns:2}).resize(true).oneTime(true)));

                                            v.status=" ";
                                            
                                            v.dayOfReg = new Date();
                                           msg.replyWithHTML(post(msg.chat.id, data.tempData[data.tempId.indexOf(msg.chat.id)], msg.chat.username));
                                           msg.replyWithMediaGroup(picPost(v));
                                        return;
                                        break;
            
                              

     


    default:

        break;

    }

}


//#################################################################################################

//################################################################################################


//Admin panel ################################################################################################

switch (msg.message.text) {
    case  words(msg.chat.id, 47)[0]:
    
        if (data.waitID.length!=0){
            msg.replyWithHTML(words(msg.chat.id, 48)+data.waitID.length);
        if (data.waitData[0].photo!=undefined){

         await   msg.replyWithMediaGroup(data.waitData[0].photo)
        await msg.replyWithHTML(data.waitData[0].text, Extra.markup(Markup.keyboard(words(msg.chat.id, 50), {columns:2}).resize(true).oneTime(true)))

        

        } else{
        
        await msg.replyWithHTML(data.waitData[0].text, Extra.markup(Markup.keyboard(words(msg.chat.id, 50), {columns:2}).resize(true).oneTime(true)))
        }



            }
            
            else msg.replyWithHTML(words(msg.chat.id, 49));




        return
            break;


    case words(msg.chat.id, 50)[1]:
        if (data.waitData[0].photo!=undefined){
            
             
             (await msg.tg.sendMediaGroup(data.groupId, data.waitData[0].photo))
             await msg.tg.sendMessage(data.groupId, data.waitData[0].text, Extra.HTML(true).markup(Markup.inlineKeyboard([ {text: words(msg.chat.id, 57)[0], callback_data: "benter"}, {text: words(data.adminID[0], 59)[0], callback_data:"bExit"}], {columns:1}).resize(true).oneTime(true)));
            
            data.workerID.push(data.waitID[0]);
            data.workerData.push(data.waitData[0]);
            
               
            } else{
             await msg.tg.sendMessage(data.groupId, data.waitData[0].text, Extra.HTML(true).markup(Markup.inlineKeyboard([ {text: words(msg.chat.id, 57)[0], callback_data: "benter"},{text: words(data.adminID[0], 59)[0], callback_data:"bExit"}], {columns:1}).resize(true).oneTime(true)));
             
             data.clientID.push(data.waitID[0]);
            data.clientData.push(data.waitData[0]);
            
            }
            msg.tg.sendMessage(data.waitID[0],words(msg.chat.id, 51), Extra.HTML(true).markup(Markup.keyboard(words(msg.chat.id, 52), {columns:2}).resize(true).oneTime(true)))
            
            data.tempId.splice(data.tempId.indexOf(data.waitID[0]),1)
            data.tempData.splice(data.tempId.indexOf(data.waitID[0]),1)
            data.waitID.shift();
            data.waitData.shift();
            
            



            jfs.writeFileSync("data/data.JSON", data, {spaces:" "})

            if (data.waitID.length!=0){
                msg.replyWithHTML(words(msg.chat.id, 48)+data.waitID.length);
            if (data.waitData[0].photo!=undefined){
    
             await   msg.replyWithMediaGroup(data.waitData[0].photo)
            await msg.replyWithHTML(data.waitData[0].text, Extra.markup(Markup.keyboard(words(msg.chat.id, 50), {columns:2}).resize(true).oneTime(true)))
    
            
    
            } else{
            
            await msg.replyWithHTML(data.waitData[0].text, Extra.markup(Markup.keyboard(words(msg.chat.id, 50), {columns:2}).resize(true).oneTime(true)))
            }
    
    
    
                }
                
                else msg.replyWithHTML(words(msg.chat.id, 49));
    
    
    


return
    break;


    case words(msg.chat.id, 50)[0]:
        msg.replyWithHTML(words(msg.chat.id, 3), Extra.markup(Markup.keyboard(words(msg.chat.id, 47), {columns:2}).resize(true).oneTime(true)))
        b = false;
        id = ""
        return
        break

  case words(msg.chat.id, 47)[1]:
      let v = `${words(msg.chat.id, 53)[0]}${data.usersID.length} ta.
${words(msg.chat.id, 53)[1]}${data.workerID.length+data.clientID.length} ta.
${words(msg.chat.id, 53)[2]}${data.workerID.length} ta.
${words(msg.chat.id, 53)[3]}${data.clientID.length} ta.
${words(msg.chat.id, 53)[4]}${data.workData.length} ta.
${words(msg.chat.id, 53)[5]}${data.blokID.length} ta.

      `
msg.replyWithHTML(v, Extra.markup(Markup.keyboard(words(msg.chat.id, 47), {columns:2}).resize(true).oneTime(true)))  
return;
  break;


case words(msg.chat.id, 47)[2]:
msg.replyWithHTML(words(msg.chat.id, 89), Extra.markup(Markup.keyboard(words(msg.chat.id, 90)).resize(true).oneTime(true)));

return
break;

case words(msg.chat.id, 90)[0]:
    
st = "IshOl"
msg.replyWithHTML(words(msg.chat.id, 91))
return
break;

case words(msg.chat.id, 90)[1]:
st = "IshBer"
msg.replyWithHTML(words(msg.chat.id, 91))
return
break;
case words(msg.chat.id, 47)[3]:
f = true
msg.replyWithHTML(words(msg.chat.id, 94))
return
break;




case words(msg.chat.id, 90)[2]:
st = "IshBarcha"
msg.replyWithHTML(words(msg.chat.id, 91))
return
break;

case words(msg.chat.id, 90)[3]:
msg.replyWithHTML(words(msg.chat.id, 50)[0], Extra.markup(Markup.keyboard(words(msg.chat.id, 47), {columns:2}).resize(true).oneTime(true)));
return
break;

default:
break;
}



// if ((data.adminID.indexOf(msg.chat.id.toString())!=-1) || (data.groupId==msg.chat.id.toString())){
    
//     if (data.workerID.indexOf(msg.message.text)!=-1) {

//         let id  = (await msg.tg.sendMessage(data.groupId, data.waitData[0].text, Extra.HTML(true) )).message_id;
//         msg.tg.sendMediaGroup(data.groupId, data.waitData[0].photo, Extra.inReplyTo(id).markup(Markup.inlineKeyboard([{text: words(msg.chat.id, 57)[0], callback_data: "bexit"}, {text: words(msg.chat.id, 57)[1], callback_data: "benter"}], {columns:2}).resize(true).oneTime(true)))
//     } else if (data.clientID.indexOf(msg.message.text!=-1)){
//         msg.tg.sendMessage(data.groupId, data.waitData[0].text, Extra.HTML(true).markup(Markup.inlineKeyboard([{text: words(msg.chat.id, 57)[0], callback_data: "bexit"}, {text: words(msg.chat.id, 57)[1], callback_data: "benter"}], {columns:2}).resize(true).oneTime(true)));
// return
//     }
//     else{
// msg.replyWithHTML(words(msg.chat.id, 58))
// return
    

//     }
// }

if ((f) || (msg.chat.id==data.groupId)){
if (data.clientID.indexOf(msg.message.text)!=-1 || data.workerID.indexOf(msg.message.text)!=-1 ){

    if (data.clientID.indexOf(msg.chat.id)!=-1){
        await msg.tg.sendMessage(data.adminID[0], data.clientData[data.clientID.indexOf(msg.chat.id)], Extra.HTML(true).markup(Markup.inlineKeyboard([ {text: words(msg.chat.id, 57)[0], callback_data: "benter"}, {text: words(data.adminID[0], 59)[0], callback_data:"bExit"}], {columns:1}).resize(true).oneTime(true)));

        await msg.tg.sendMessage(data.groupId, data.clientData[data.clientID.indexOf(msg.chat.id)], Extra.HTML(true).markup(Markup.inlineKeyboard([ {text: words(msg.chat.id, 57)[0], callback_data: "benter"}, {text: words(data.adminID[0], 59)[0], callback_data:"bExit"}], {columns:1}).resize(true).oneTime(true)));

    } else{

        (await msg.tg.sendMediaGroup(data.adminID[0], data.workerData[data.workerID.indexOf(msg.message.text)].photo))
        await msg.tg.sendMessage(data.adminID[0], data.workerData[data.workerID.indexOf(msg.message.text)].text, Extra.HTML(true).markup(Markup.inlineKeyboard([ {text: words(msg.chat.id, 57)[0], callback_data: "benter"}, {text: words(data.adminID[0], 59)[0], callback_data:"bExit"}], {columns:1}).resize(true).oneTime(true)));


        (await msg.tg.sendMediaGroup(data.groupId, data.workerData[data.workerID.indexOf(msg.message.text)].photo))
        await msg.tg.sendMessage(data.groupId, data.workerData[data.workerID.indexOf(msg.message.text)].text, Extra.HTML(true).markup(Markup.inlineKeyboard([ {text: words(msg.chat.id, 57)[0], callback_data: "benter"}, {text: words(data.adminID[0], 59)[0], callback_data:"bExit"}], {columns:1}).resize(true).oneTime(true))).then(x=>{
 //           msg.tg.sendMessage(data.groupId,"<b>Olgan ishlari soni: </b>"+data.workData.reduce((val, itm)=>{itm.who == msg.message.text?val = val+1:val = val+0}, 0)+"\n<b>Olingan ishlar kodi: </b>"+data.workData.filter(x => x.who == msg.message.text).map(x => x.codeWork).join(" "), Extra.HTML(true).inReplyTo(x.message_id))
 msg.tg.sendMessage(data.groupId,"<b>Olgan ishlari soni: </b>"+data.workData.reduce((val, itm) => itm.who == msg.message.text ? val + 1 : val + 0, 0)+"\n<b>Olingan ish kodlari: </b>"+data.workData.filter(x=>x.who==msg.message.text).map(x=>x.codeWork).join(" "), Extra.HTML(true).inReplyTo(x.message_id))   

})
       
       

    }


} else{

    msg.replyWithHTML(words(msg.chat.id, 95));
}
f = false;

}
    







switch (st) {
    case "IshOl":
        
    for (let i = 0; i < data.workerID.length; i++) {
        msg.tg.sendMessage(data.workerID[i], msg.message.text);
        
    }    
st = ""
msg.tg.sendMessage(data.adminID[0], words(data.adminID[0], 93), Extra.HTML(true).markup(Markup.keyboard(words(data.adminID[0], 47), {columns:2}).resize(true).oneTime(true)));
        break;
        case "IshBer":
            for (let i = 0; i < data.clientID.length; i++) {
                msg.tg.sendMessage(data.clientID[i], msg.message.text);
                
            }    
      st = ""  
      msg.tg.sendMessage(data.adminID[0], words(data.adminID[0], 93), Extra.HTML(true).markup(Markup.keyboard(words(data.adminID[0], 47), {columns:2}).resize(true).oneTime(true)));
                break;
        

                case "IshBarcha":
    for (let i = 0; i < data.usersID.length; i++) {
        msg.tg.sendMessage(data.usersID[i], msg.message.text);
        
    }    
st = ""
msg.tg.sendMessage(data.adminID[0], words(data.adminID[0], 93), Extra.HTML(true).markup(Markup.keyboard(words(data.adminID[0], 47), {columns:2}).resize(true).oneTime(true)));      
break;




    default:
        break;
}


//##################################################################################################
//##################################################################################################
//####################################### MAIN SECTION #############################################
//##################################################################################################
//##################################################################################################



//Work post
let rid;

switch (msg.message.text){


case words(msg.chat.id, 52)[0]:
  let code = keygen()
    
if (data.workID.indexOf(msg.chat.id)==-1) {

    data.workID.push(msg.chat.id);
    data.workDataTemp.push( {status: "kindWork", codeWork: code, id: msg.chat.id} )
    
    
} else{
    
    data.workDataTemp[data.workID.indexOf(msg.chat.id)] = ( {status: "kindWork", codeWork: code, id: msg.chat.id} )
    



}

msg.replyWithHTML(words(msg.chat.id, 70), Extra.HTML(true).markup(Markup.keyboard(words(msg.chat.id, 19), {columns:2}).resize(true).oneTime(true)));

return
break;


case words(msg.chat.id, 75)[0]:
    data.workDataTemp.splice(data.workID.indexOf(msg.chat.id),1)
    data.workID.splice(data.workID.indexOf(msg.chat.id),1)
    msg.replyWithHTML(words(msg.chat.id, 33), main(msg.chat.id));
    
return
break;
case words(msg.chat.id, 75)[1]:
    
let d =  new Date()
    
    data.workDataTemp[data.workID.indexOf(msg.chat.id)].codeWork = keygen();
    data.codeWork.push(data.workDataTemp[data.workID.indexOf(msg.chat.id)].codeWork)
    data.workData.push(data.workDataTemp[data.workID.indexOf(msg.chat.id)]);

await msg.replyWithHTML(words(msg.chat.id, 84)[0]+"\n"+words(msg.chat.id, 84)[1]+ data.workDataTemp[data.workID.indexOf(msg.chat.id)].codeWork+"\n"+words(msg.chat.id, 84)[2], main(msg.chat.id));
for (let i = 0; i < data.workerID.length; i++) {
if (data.blokID.indexOf(data.workerID[i])==-1){
    await msg.tg.sendMessage(data.workerID[i], workPost(data.workDataTemp[data.workID.indexOf(msg.chat.id)], data.workerID[i], false),Extra.HTML(true).markup(Markup.inlineKeyboard([{text: words(data.workerID[i], 76), callback_data:"wEnter"}], {columns:1}).resize(true).oneTime(true)) )
    
    if (countDays(new Date(data.workerData[data.workerID.indexOf(data.workerID[i])].text.split("!_")[1]), new Date())>=data.day){
        data.blokID.push(data.workerID[i]);
        await  msg.tg.sendMessage(data.workerID[i],words(data.workerID[i].toString(), 77), Extra.HTML(true));
    }
    
} else{
msg.tg.sendMessage(data.workerID[i], words(msg.chat.id, 77), Extra.HTML(true));

}
    

}

await msg.tg.sendMessage(data.groupId,"#"+words(data.adminID[0], 85)+"\n"+workPost(data.workDataTemp[data.workID.indexOf(msg.chat.id)], data.adminID[0], true), Extra.HTML(true)).then((ms)=>{
    data.groupMessageID.push(ms.message_id);
})





    data.workDataTemp.splice(data.workID.indexOf(msg.chat.id),1)
    data.workID.splice(data.workID.indexOf(msg.chat.id),1)




jfs.writeFileSync("data/data.JSON", data, {spaces:" "});
return
break;





    default:

    break;
}



if (data.workID.indexOf(msg.chat.id)!=-1){
let w = data.workDataTemp[data.workID.indexOf(msg.chat.id)]
switch (w.status) {
    case "kindWork":
    w.kindWork = msg.message.text
msg.replyWithHTML(words(msg.chat.id, 71), Extra.markup(Markup.keyboard(words(msg.chat.id, 12),{columns:3}).resize(true).oneTime(true)));
w.status = "hududWork"
return
        break;
        case "hududWork":
            w.hududWork = msg.message.text
        msg.replyWithHTML(words(msg.chat.id, 72));
        w.status = "manzilWork"
    return
                break;
                case "manzilWork":
                    w.manzilWork = msg.message.text
                msg.replyWithHTML(words(msg.chat.id, 15));
                w.status = "tel1"
            return
                        break;
                
    case "tel1":
    w.tel1 = msg.message.text;
    msg.replyWithHTML(words(msg.chat.id, 16));
    w.status = "tel2"
    return
    break;

    case "tel2":
    w.tel2 = msg.message.text;
    msg.replyWithHTML(words(msg.chat.id, 17), Extra.markup(Markup.keyboard([{text: words(msg.chat.id, 73)[0], request_contact:true}]).resize(true).oneTime(true)));
    w.status = "teltg"
    return

    case "teltg":
    w.teltg = msg.message.contact.phone_number
    msg.replyWithHTML(words(msg.chat.id, 74), Extra.markup(Markup.keyboard(words(msg.chat.id, 75),{columns:2}).resize(true).oneTime(true)));

    
    
    w.userID = msg.chat.id;
// msg.replyWithHTML(workPost(w,msg.chat.id, true), Extra.markup(Markup.keyboard(words(msg.chat.id, 75),{columns:2}).resize(true).oneTime(true)));
msg.tg.sendMessage(msg.chat.id,"#"+words(msg.chat.id, 85)+"\n"+workPost(data.workDataTemp[data.workID.indexOf(msg.chat.id)], msg.chat.id, true), Extra.HTML(true))

    w.status = ""
    return


    
    break;



    default:
        break;
}


}





}catch (e){
  
    msg.replyWithHTML("<b>Siz ro`yxatdan o`tmagan bo`lishingiz mumkin. Iltimos /start buyrug`ini yuboring</b>")
}


        


})


// bot.hears("👤Men haqimda", msg=>{
//     msg.replyWithHTML(`<b>📝№${data.usersID.indexOf(msg.chat.id.toString())+1};

// 🆔:${msg.chat.id};
// ${words(msg.chat.id, 5)[0]}: <i>${msg.chat.first_name}</i>;
// ${words(msg.chat.id, 5)[1]}: <i>@${msg.chat.username}</i>;

// status: ${data.clientData[data.clientID.indexOf(msg.chat.id.toString())].status};
//     </b>`)
// })

// bot.hears("🛠Tilni Sozlash", msg=>{
//     msg.replyWithHTML("<b>🛠Sozlashni amalga oshirishingiz mumkin:🛠</b>", Extra.markup(lButton));

// })

// bot.hears("🔑Ro`yxatdan o`tish", msg=>{
// msg.replyWithHTML("<b>⚠️Ro`yxatdan o`tishdan oldin <u>SHARTNOMA SHARTLARI</u> bilan tanishib chiqing</b>\n"+words(msg.chat.id, 7)+"\nRozi bo`lsangiz tanishdim tugmasini bosing, aks holda bekor qilish tugmasini. ", Extra.markup(Markup.keyboard([words(msg.chat.id, 8)[0],words(msg.chat.id, 8)[1] ], {columns:2}).resize(true).oneTime(true)))

// })



 
 
let main = (id)=>{
if ((data.clientID.indexOf(id.toString())!=-1) || (data.workerID.indexOf(id.toString())!=-1)){
    return Extra.markup(Markup.keyboard(words(id, 52), {columns:2}).resize(true).oneTime(true))

} else{

    return Extra.markup(Markup.keyboard(words(id, 4), {columns:2}).resize(true).oneTime(true))
}


}

bot.action("UZ", msg=>{

    

    data.userKey[data.usersID.indexOf(msg.chat.id.toString())] = 0;


    if (data.adminID.indexOf(msg.chat.id.toString())!=-1){
        msg.replyWithHTML(words(msg.chat.id, 6), Extra.markup(Markup.keyboard(words(msg.chat.id, 47), {columns:2}).resize(true).oneTime(true)));
    return
    }

    msg.reply(words(msg.chat.id, 6))
    msg.reply(words(msg.chat.id, 3), main(msg.chat.id));
})

bot.action("KRILL", msg=>{
     
    data.userKey[data.usersID.indexOf(msg.chat.id.toString())] = 1;
    
    if (data.adminID.indexOf(msg.chat.id.toString())!=-1){
        msg.replyWithHTML(words(msg.chat.id, 6), Extra.markup(Markup.keyboard(words(msg.chat.id, 47), {columns:2}).resize(true).oneTime(true)));
    return
    }
    
    msg.reply(words(msg.chat.id, 6))
    msg.reply(words(msg.chat.id, 3), main(msg.chat.id));
    
    jfs.writeFileSync("data/data.JSON", data, {spaces:" "});
    
})

    bot.action("RU", msg=>{
 
        data.userKey[data.usersID.indexOf(msg.chat.id.toString())] = 2;
        
        if (data.adminID.indexOf(msg.chat.id.toString())!=-1){
            msg.replyWithHTML(words(msg.chat.id, 6), Extra.markup(Markup.keyboard(words(msg.chat.id, 47), {columns:2}).resize(true).oneTime(true)));
            
            return
        
    }
        
        msg.reply(words(msg.chat.id, 6))
        msg.reply(words(msg.chat.id, 3), main(msg.chat.id));
        jfs.writeFileSync("data/data.JSON", data, {spaces:" "});
        })

        bot.action("EN", msg=>{

    

            data.userKey[data.usersID.indexOf(msg.chat.id.toString())] = 3;
            
            if (data.adminID.indexOf(msg.chat.id.toString())!=-1){
                msg.replyWithHTML(words(msg.chat.id, 6), Extra.markup(Markup.keyboard(words(msg.chat.id, 47), {columns:2}).resize(true).oneTime(true)));
            return
            }
            
            
            msg.reply(words(msg.chat.id, 6))
            msg.reply(words(msg.chat.id, 3), main(msg.chat.id));
                
            jfs.writeFileSync("data/data.JSON", data, {spaces:" "});            
        })
            




            bot.on('inline_query', (ctx) => {

             
         
                const result = [
               {
               type: "article",
               id:"0001",
               title: "UniversalUsta.Uz",
               description: "Do'stlarga ulashish",
               
               input_message_content:{
                 message_text:`<b>
╯▅╰╱▔▔▔▔▔▔▔╲╯╯☼       UniversalUsta.uz 
▕▕╱╱╱╱╱╱╱╱┛▂╲╲╭   +998 33 491 99 95
╱▂▂▂▂▂▂╱╱┏▕╋▏╲╲
▔▏▂┗┓▂▕▔┛▂┏▔▂▕▔ 
▕▕╋▏▕╋▏▏▕┏▏▕╋▏▏
Assalomu Alaykum✋🏻. UniversalUsta.uz jamoasining rasmiy botiga Xush kelibsiz!!!
🗣UniversalUsta.uz jamoasi👥 sizga quyidagi imkonitalarni taqdim etadi😱:
🖲<i>Biz bilan istalgan vaqtda istalgan joyda o'z qurilish loyihangiz uchun ustalarni online tarzda oson chaqiring.
🖲Biz bilan istalgan vaqtda istalgan joyda o'zingizga mos ish topishingiz mumkin.</i>

📝Botdan ro'yxatdan o'ting, 🔗Bizga qo'shiling, 🆔 raqam oling va o'z orzularingiz sari biz orqali qadam qo'ying.\n

╔╦═•👷‍♂️•👨‍🔧•👷‍♂️•👨‍🔧•═╦╗
    @UniversalUsta_uz
╚╩═•👷‍♂️•👨‍🔧•👷‍♂️👨‍🔧•═╩╝</b>`,
                 parse_mode: 'HTML'
               },
               
               reply_markup: {
                 inline_keyboard: [
                   [{ text: 'Bizga qo`shilish', url:"https://t.me/"+ctx.botInfo.username}]
               ]},
               
               
               }
               
                ]
               
               
               ctx.answerInlineQuery(result);
            
               })

let ks="", idk=""

function extractCode(s){
   
    return (s.split("\n")[9].split("#")[1])
    
    }

bot.on("callback_query", async(msg)=>{
try{        
            ks = msg.callbackQuery.message.text.split("\n")[4]
            
            idk = parseInt(ks.slice(ks.indexOf("🆔")+4, ks.length)).toString()
              
            let y = data.workData[data.codeWork.indexOf(extractCode(msg.callbackQuery.message.text))]
    switch (msg.callbackQuery.data) {
                case "benter":
          

            if (data.blokID.indexOf(idk)==-1){
                    data.blokID.push(idk)
                    msg.tg.sendMessage(idk, words(idk, 60), Extra.HTML(true).markup(Markup.removeKeyboard()));


        msg.tg.editMessageReplyMarkup(data.groupId, msg.callbackQuery.message.message_id, msg.callbackQuery.inline_message_id, Markup.inlineKeyboard([{text: words(data.adminID[0], 57)[0], callback_data:"benter"},{text: words(data.adminID[0], 59)[1], callback_data:"bExit"}], {columns:1}).resize(true).oneTime(true))
            }
            
            return
                break;
        
                case "bExit":
                    if (data.blokID.indexOf(idk)!=-1){
                        data.blokID.splice(data.blokID.indexOf(idk),1)

     
                        let ks = msg.callbackQuery.message.text.split("\n");
                        let rt = ""
                        data.workerData[data.workerID.indexOf(idk)].text = "";
                        for (let i = 0; i < ks.length; i++) {
                            
                            if (i==18){
                                rt = rt+words(idk, 88)+"!_"+new Date()+"!_\n";
                                continue
                            }
                    rt = "<b>"+rt+ks[i]+"\n</b>"
                        }
                    
                        data.workerData[data.workerID.indexOf(idk)].text = rt;
                        msg.tg.editMessageText(data.groupId, msg.callbackQuery.message.message_id, msg.callbackQuery.inline_message_id,rt , Extra.HTML(true).markup(Markup.inlineKeyboard([{text: words(data.adminID[0], 57)[1], callback_data:"benter"},{text: words(data.adminID[0], 59)[0], callback_data:"bExit"} ], {columns:1}).resize(true).oneTime(true)));
                        
                        // msg.tg.editMessageReplyMarkup(data.groupId, msg.callbackQuery.message.message_id, msg.callbackQuery.inline_message_id, )
                    
                    
                        msg.tg.sendMessage(idk, words(idk, 61), Extra.HTML(true).markup(Markup.keyboard(words(idk, 52), {columns:2}).resize(true).oneTime(true)));
                    
            
                    }

                    return
                    break;
    


    case "wEnter":
        

    
    
    //msg.tg.sendMessage(data.groupId,workPost(y, data.adminID[0], true)+"\n\n"+words(data.adminID[0], 97)+":\n\n"+data.workerData[data.workerID.indexOf(msg.callbackQuery.from.id.toString())].text, Extra.HTML(true) )
    //msg.tg.editMessageReplyMarkup(msg.callbackQuery.message.chat.id, msg.callbackQuery.message.message_id, msg.callbackQuery.inline_message_id, Markup.inlineKeyboard([{text: words(msg.callbackQuery.message.chat.id, 78)[0], callback_data:"conWork"},{text:words(msg.callbackQuery.message.chat.id, 78)[1], callback_data:"conWork"} ], {columns:2}).resize(true).oneTime(true))
        
        if (y.who==undefined){      
            msg.tg.editMessageText(msg.callbackQuery.from.id, msg.callbackQuery.message.message_id, msg.callbackQuery.inline_message_id, workPost(y,msg.callbackQuery.from.id.toString(), true )+"\n\n"+words(msg.callbackQuery.from.id.toString(), 79), Extra.HTML(true).markup(Markup.inlineKeyboard([{text: words(msg.callbackQuery.message.chat.id, 78)[0], callback_data:"neWork"},{text:words(msg.callbackQuery.message.chat.id, 78)[1], callback_data:"conWork"} ], {columns:2}).resize(true).oneTime(true)));
    
          y.who = msg.callbackQuery.from.id.toString()
    
    jfs.writeFileSync("data/data.JSON", data, {spaces:" "});

        } else {
            msg.tg.editMessageText(msg.callbackQuery.from.id, msg.callbackQuery.message.message_id, msg.callbackQuery.inline_message_id, words(msg.callbackQuery.from.id.toString(), 86), Extra.HTML(true));
        }

    return
    break;

    case "neWork":
       
        msg.tg.editMessageText(msg.callbackQuery.from.id, msg.callbackQuery.message.message_id, msg.callbackQuery.inline_message_id, workPost(y, msg.callbackQuery.from.id.toString(), false), Extra.HTML(true).markup(Markup.inlineKeyboard([{text:words(msg.callbackQuery.from.id, 76), callback_data:"wEnter"}], {columns:2}).resize(true).oneTime(true)));
        y.who = undefined;

        for (let i = 0; i < data.workerID.length; i++) {
            if (data.blokID.indexOf(data.workerID[i])==-1){
                await  msg.tg.sendMessage(data.workerID[i], workPost(y, data.workerID[i], false), Extra.HTML(true).markup(Markup.inlineKeyboard([{text:words(data.workerID[i], 76), callback_data:"wEnter"}],{columns:1} ).resize(true).oneTime(true)  ));
            } else{
                msg.tg.sendMessage(data.workerID[i], words(data.workerID[i], 77), Extra.HTML(true))
    
            }
            
             }
             jfs.writeFileSync("data/data.JSON", data, {spaces:" "});
    return
       
    break;
    case "conWork":
        
            msg.tg.editMessageText(msg.callbackQuery.from.id, msg.callbackQuery.message.message_id, msg.callbackQuery.inline_message_id, workPost(y, msg.callbackQuery.from.id.toString(), true)+"\n\n"+words(msg.callbackQuery.from.id, 80) , Extra.HTML(true));
            
        msg.tg.editMessageText(data.groupId, data.groupMessageID[data.codeWork.indexOf(y.codeWork)], msg.callbackQuery.inline_message_id,"#"+words(data.adminID[0].toString(), 87)+"\n"+workPost(y, data.adminID[0], true)+"\n\n"+words(data.adminID[0], 81)+":\n\n"+data.workerData[data.workerID.indexOf(msg.callbackQuery.from.id.toString())].text, Extra.HTML(true) )
        
            
        


    
    return
    break

    
    default:
            break;
    }

        

}catch(e){

    
}

})


bot.launch({polling: true})



    let i = 0;
setInterval(() => {
  require("node-fetch")("https://mature-ballistic-age.glitch.me").then(x => {
  i = i+1;
});
if (i%360==0) exec("rm -rf .git", (err, stdout, stdin)=>{
    if (err) throw err;
    
})   
}, 240000);
