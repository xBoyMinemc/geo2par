var fs = require('fs');

//读取文件
function rF(Fpath){
fs.readFile(Fpath, function(err, data) {
    if(err) {
        console.log("#################\n"+Fpath+"\n#################\n"+err);
        return data;
    }
    //console.log(data.toString())
    return data;
});    
}


function travel(dir, callback) {
    fs.readdirSync(dir).forEach(function (file) {
        var pathname = dir+"/"+file
            callback(pathname);
    });
}

let modWithTex = {}
function srdtfyguh(pathname){
    fs.readFile(pathname, function (err, data) {

        var reg = /("([^\\\"]*(\\.)?)*")|('([^\\\']*(\\.)?)*')|(\/{2,}.*?(\r|\n))|(\/\*(\n|.)*?\*\/)/g,// 正则表达式
            str = (data + "")
        str = str.replace(reg, function (word) { // 去除注释后的文本
            return /^\/{2,}/.test(word) || /^\/\*/.test(word) ? "" : word;
        });
        let xboy = JSON.parse(str)

        let id = xboy["minecraft:client_entity"].description.identifier
        let texs = xboy["minecraft:client_entity"].description.textures


        modWithTex[id] = texs
    })
}
travel("entity",srdtfyguh)


//写入文件
function wF(Fpath, Fdata) {
    fs.writeFile(Fpath, Fdata, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(Fpath + " The file was saved!");
        return true;
    });
}


    //newFunction();





// console.log(geoContent.geoKeyArray[0])
// wF("8.txt","iujyhgf")

//判断文件/目录是否存在
fs.access('or/',(err)=>{
    console.log(err ?  '目录/文件不存在': '文件存在,可以进行读写');
});






let ordata

fs.readFile("or/creeper_head_N.json", function (err, data) {

    ordata = data

});




setTimeout(() => {

 
 travel("models/entity",xboy)

//newFunction("models/entity/armor_stand.geo.json")

}, 200);
let F = []
function xboy(FilePath){
    F.push(FilePath)
}

                    ;;"延迟是因为文件读写的问题";;
                    ;;"大概吧，隔俩月再来写注释不记得了";;
                    
setInterval(()=>{
    newFunction(F.pop())
},1500)

function newFunction(FilePath) {

    fs.readFile(FilePath, function (err, data) {
        if (err) { console.log("#################\n" + FilePath + "\n#################\n" + err); }

        let d = JSON.parse("" + data);
        if (d.format_version != "1.8.0") return;
            let filName = FilePath.replace("models/entity/","").replace(".json","")
            let geoKeyArray = [];
            Object.keys(d).forEach(
                (key) => { if (key.startsWith("geometry.")) { geoKeyArray.push(key); } }
            );


                //let par = JSON.parse("" + data);
                ////console.log(par.particle_effect.description.identifier)
                //// console.log(par.particle_effect.description.basic_render_parameters.material)
                //// console.log(par.particle_effect.description.basic_render_parameters.texture)
                //// console.log(par.particle_effect.components["minecraft:emitter_shape_point"].offset)
                //// console.log(par.particle_effect.components["minecraft:particle_appearance_billboard"].size)
                //// console.log(par.particle_effect.components["minecraft:particle_appearance_billboard"].direction.custom_direction)
                //// console.log(par.particle_effect.components["minecraft:particle_appearance_billboard"].uv.texture_width)
                //// console.log(par.particle_effect.components["minecraft:particle_appearance_billboard"].uv.texture_height)
                //// console.log(par.particle_effect.components["minecraft:particle_appearance_billboard"].uv.uv)
                //// console.log(par.particle_effect.components["minecraft:particle_appearance_billboard"].uv.uv_size)

                geoKeyArray.forEach((key) => {
                    let modName = key.replace("geometry.",'').replace(".","_")
                    let geoContent = d[key];
                    let parContent = JSON.parse("" + ordata);
                    // //console.log(modWithTex)
                    // Object.keys(modWithTex).forEach((modKey)=>{
                    // })
                    console.log("minecraft:"+modName)
                        if(!modWithTex["minecraft:"+modName]) return;
                        Object.keys(modWithTex["minecraft:"+modName]).forEach((mode)=>{  
                            let tex = modWithTex["minecraft:"+modName][mode]
                            fs.access("X:/end/"+ modName + "_" +mode,(err)=>{
                                err ?  fs.mkdir("X:/end/"+ modName + "_" + mode,err=>{}) : console.log( '文件存在,可以进行读写');
                            });
                            setTimeout(() => {
              
                    {

                        //写入文件
                        let txt = []

                        function wF(Fpath, Fdata) {
                            fs.writeFile("X:/"+Fpath, Fdata, function (err) {
                                if (err) {
                                    return console.log("$##ynhbtgvrfced"+err);
                                }
                                console.log(Fpath + "The file was saved!");

                                let t = {
                                    "particle_effect": {
                                        "effect": "xboycraft:xboy_body_0_D",
                                        "type": "emitter"
                                    }
                                }

                                let _t = JSON.parse(JSON.stringify(t))
                                _t.particle_effect.effect = "xboycraft:" + Fpath.split("/")[2].replace(".json", "")
                                txt.push(_t)
                                return true;
                            });
                        }



                        parContent.particle_effect.description.basic_render_parameters.material = "particles_alpha";
                        parContent.particle_effect.description.basic_render_parameters.texture = tex;   //"textures/entity/"+ modName + "_" + mode +"/"+ modName + "_" + mode +"";

                        parContent.particle_effect.components["minecraft:particle_appearance_billboard"].uv.texture_width = geoContent.texturewidth;
                        parContent.particle_effect.components["minecraft:particle_appearance_billboard"].uv.texture_height = geoContent.textureheight;

                        if (!geoContent.bones) return;  //slime
                        geoContent.bones.forEach((bone) => {
                            //console.log("\n" + bone.name);
                            //console.log(bone.cubes);
                            //console.log(filName)
                            if (!bone.cubes) return;  //enderman___right_hand
                            bone.cubes.forEach((cube, index) => {
                                let origin = cube.origin, size = cube.size, uv = cube.uv;

                                if (!uv) return; //tripod___bone___cube___uv
                                
                                //console.log(bone, cube)
                                {
                                    {
                                        let _parContent = JSON.parse(JSON.stringify(parContent));
                                        _parContent.particle_effect.description.identifier = "xboycraft:" + ""+ modName + "_" + mode +"" + "_" + bone.name + "_" + index + "_" + "E";
                                        _parContent.particle_effect.components["minecraft:emitter_shape_point"].offset = [(origin[0] + size[0]) / 16, (origin[1] + size[1] / 2) / 16, (origin[2] + size[2] / 2) / 16];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].size = [size[2] / 32, size[1] / 32];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].direction.custom_direction = [1, 0, 0];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].uv.uv = [uv[0] + 0, uv[1] + size[2]];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].uv.uv_size = [size[2], size[1]];

                                        wF("end/"+ modName + "_" + mode +"/" + ""+ modName + "_" + mode +"" + "_" + bone.name + "_" + index + "_" + "E" + ".json", JSON.stringify(_parContent));
                                    }
                                    {
                                        let _parContent = JSON.parse(JSON.stringify(parContent));
                                        _parContent.particle_effect.description.identifier = "xboycraft:" + ""+ modName + "_" + mode +"" + "_" + bone.name + "_" + index + "_" + "w";
                                        _parContent.particle_effect.components["minecraft:emitter_shape_point"].offset = [(origin[0]) / 16, (origin[1] + size[1] / 2) / 16, (origin[2] + size[2] / 2) / 16];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].size = [size[2] / 32, size[1] / 32];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].direction.custom_direction = [-1, 0, 0];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].uv.uv = [uv[0] + size[0] + size[2], uv[1] + size[2]];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].uv.uv_size = [size[2], size[1]];

                                        wF("end/"+ modName + "_" + mode +"/" + ""+ modName + "_" + mode +"" + "_" + bone.name + "_" + index + "_" + "w" + ".json", JSON.stringify(_parContent));
                                    }
                                    {
                                        let _parContent = JSON.parse(JSON.stringify(parContent));
                                        _parContent.particle_effect.description.identifier = "xboycraft:" + ""+ modName + "_" + mode +"" + "_" + bone.name + "_" + index + "_" + "N";
                                        _parContent.particle_effect.components["minecraft:emitter_shape_point"].offset = [(origin[0] + size[0] / 2) / 16, (origin[1] + size[1] / 2) / 16, (origin[2]) / 16];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].size = [size[0] / 32, size[1] / 32];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].direction.custom_direction = [0, 0, -1];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].uv.uv = [uv[0] + size[2], uv[1] + size[2]];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].uv.uv_size = [size[0], size[1]];

                                        wF("end/"+ modName + "_" + mode +"/" + ""+ modName + "_" + mode +"" + "_" + bone.name + "_" + index + "_" + "N" + ".json", JSON.stringify(_parContent));
                                    }
                                    {
                                        let _parContent = JSON.parse(JSON.stringify(parContent));
                                        _parContent.particle_effect.description.identifier = "xboycraft:" + ""+ modName + "_" + mode +"" + "_" + bone.name + "_" + index + "_" + "S";
                                        _parContent.particle_effect.components["minecraft:emitter_shape_point"].offset = [(origin[0] + size[0] / 2) / 16, (origin[1] + size[1] / 2) / 16, (origin[2] + size[2]) / 16];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].size = [size[0] / 32, size[1] / 32];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].direction.custom_direction = [0, 0, 1];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].uv.uv = [uv[0] + size[2] + size[0] + size[2], uv[1] + size[2]];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].uv.uv_size = [size[0], size[1]];

                                        wF("end/"+ modName + "_" + mode +"/" + ""+ modName + "_" + mode +"" + "_" + bone.name + "_" + index + "_" + "S" + ".json", JSON.stringify(_parContent));
                                    }
                                    {
                                        let _parContent = JSON.parse(JSON.stringify(parContent));
                                        _parContent.particle_effect.description.identifier = "xboycraft:" + ""+ modName + "_" + mode +"" + "_" + bone.name + "_" + index + "_" + "X";
                                        _parContent.particle_effect.components["minecraft:emitter_shape_point"].offset = [(origin[0] + size[0] / 2) / 16, origin[1] / 16, (origin[2] + size[2] / 2) / 16];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].size = [size[0] / 32, size[2] / 32];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].direction.custom_direction = [0, 1, 0];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].uv.uv = [uv[0] + size[2], uv[1]];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].uv.uv_size = [size[0], size[2]];

                                        wF("end/"+ modName + "_" + mode +"/" + ""+ modName + "_" + mode +"" + "_" + bone.name + "_" + index + "_" + "X" + ".json", JSON.stringify(_parContent));
                                    }
                                    {
                                        let _parContent = JSON.parse(JSON.stringify(parContent));
                                        _parContent.particle_effect.description.identifier = "xboycraft:" + ""+ modName + "_" + mode +"" + "_" + bone.name + "_" + index + "_" + "U";
                                        _parContent.particle_effect.components["minecraft:emitter_shape_point"].offset = [(origin[0] + size[0] / 2) / 16, (origin[1] + size[1]) / 16, (origin[2] + size[2] / 2) / 16];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].size = [size[0] / 32, size[2] / 32];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].direction.custom_direction = [0, -1, 0];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].uv.uv = [uv[0] + size[2], uv[1]];
                                        _parContent.particle_effect.components["minecraft:particle_appearance_billboard"].uv.uv_size = [size[0], size[2]];

                                        wF("end/"+ modName + "_" + mode +"/" + ""+ modName + "_" + mode +"" + "_" + bone.name + "_" + index + "_" + "U" + ".json", JSON.stringify(_parContent));
                                    }

                                }

                            });


                        });
                        setTimeout(() => {

                            fs.readFile("or/creeper_head_X.json", function (err, data) {

                                let xboy = JSON.parse("" + data)
                                xboy.particle_effect.description.identifier = "xboycraft:"+ modName + "_" + mode +"_X"
                                xboy.particle_effect.events.send.sequence = txt
                                wF("end/"+ modName + "_" + mode +"/"+ modName + "_" + mode +"_X.json",JSON.stringify(xboy))
                            })
                            //console.log(modWithTex)
                        }, 1000);

                    }

                           
                            }, 1000);
              
                        })


                });

            
        //console.log(geoKeyArray)

    });




}

