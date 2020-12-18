var app = {// Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.addEventListener("backbutton", this.onBackKeyDown, false);
        document.addEventListener("pause", this.onPause, false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },
    onBackKeyDown:function() {
        console.log('"Backbtn" event triggered');
        UI.navigate.back();
    },
    onPause:function(){
        console.log('"pause" event triggered' );
        config.save();// saves the config on app exit
        if(config.data.aggressive_mode){
            //Aggressive pause behaviour
        }else{
            //NON-Aggressive pause behaviour
        }
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};app.initialize();

/*  Add your crap here  */

//window load listener
window.addEventListener('load',function(){
    // Checks if previous config.datauration file exists
    if(localStorage.getItem(config.configlocation)){
        config.load();//load up configuration if it exists
    }else{
        config.validate();//make new config file if it does not exist
    }
    config.data.usecount++;
    this.document.getElementById('usecount').innerHTML=config.data.usecount+' times';
    //Loads Appropriate view
    UI.navigate.startup();

    //Begins the Headers flamboyance
    UI.header.color();
    setInterval(()=>{UI.header.color();},5000);

    //Sets the slider positions
    mainprocess.RGB.setsliders();
    mainprocess.HSL.setsliders();

    //Set the Hex pannel
    mainprocess.HEX.outputhex();

    //set the Conversion pannel
    UI.Convert_submenu.navigate();
    mainprocess.CONVERT.RGB.Output();
    mainprocess.CONVERT.RGB.setvalues();
    mainprocess.CONVERT.HSL.Output();
    mainprocess.CONVERT.HSL.setvalues();
    mainprocess.CONVERT.HEX.Output(config.data.converthex_put);
    mainprocess.CONVERT.HEX.setvalues();

    //clsoes loading screen after initalization is complete, loading screen is necicary becase not everyone has an SSD
    setTimeout(()=>{document.getElementById('loadingscreen').style.display="none";document.getElementById('loader').style.animation='none';},1600);
    
    //Sets positions of setting switches and initialize settings
    mainprocess.settings.theme.setposition();
    mainprocess.settings.aggressive_mode.setposition();
    mainprocess.settings.colorheader.setposition();
    
    //Aggressive mode
    if(config.data.aggressive_mode){
        setInterval(()=>{mainprocess.aggressive_mode_action()},30000/* Every 30 seconds */);
    }else{
        console.log('Aggressive mode is not enabled');
    }
    app.StatusBar.backgroundColorByHexString("#333");
});

    /*  configuration file handling    */
var config={
    data:{
        usecount:0,
        RED_slider:128,
        GREEN_slider:128,
        BLUE_slider:128,
        HUE_slider:180,
        SATURATION_slider:100,
        LIGHTNESS_slider:50,
        HEX_put:'#ffffff',
        theme:"dark",
        aggressive_mode:true,
        colorheader:true,
        view:"RGB",
        RED_put:122,
        GREEN_put:122,
        BLUE_put:122,  
        convertview:"RGB",
        HUE_put:0,
        SAT_put:50,
        LIGHT_put:50,
        converthex_put:'#ffffff',
    },
    configlocation:"CC001_cfg",//not strict, can be anything. Think of it as a file name/path
    save:function(){//Save the config file
        localStorage.setItem(this.configlocation,JSON.stringify(this.data));
        console.log('config saved: ');
        console.table(this.data);
    },
    load:function(){//Load the config file into memory
        this.data=JSON.parse(localStorage.getItem(this.configlocation));
        console.log('config Loaded: ');
        console.table(this.data);
        this.validate();
    },
    validate:function(){//validate configuration file
        console.log('Config is being validated');
        var configisvalid = true;

        if(this.data.usecount){//if it does exist
            if(this.data.usecount==undefined ||this.data.usecount<0){
                this.data.usecount=1;
                configisvalid=false;
                console.log('"usecount" was found to be invalid and was set to "1"');
            }
        }else{//else it does not exits
            this.data.usecount=1;
            configisvalid=false;
            console.log('"usecount" did not exist and was set to "1"');
        }

        if(this.data.view){//if it does exist
            if(this.data.view==undefined){
                this.data.view="RGB";
                configisvalid=false;
                console.log('"view" was found to be invalid and was set to "default"');
            }
        }else{//else it does not exits
            this.data.view="RGB";
            configisvalid=false;
            console.log('"view" did not exist and was set to "default"');
        }

        if(this.data.BLUE_slider){//if it does exist
            if(this.data.BLUE_slider==undefined){
                this.data.BLUE_slider=128;
                configisvalid=false;
                console.log('"BLUE_slider" was found to be invalid and was set to "128"');
            }
        }else{//else it does not exits
            this.data.BLUE_slider=128;
            configisvalid=false;
            console.log('"BLUE_slider" did not exist and was set to "128"');
        }
        
        if(this.data.GREEN_slider){//if it does exist
            if(this.data.GREEN_slider==undefined){
                this.data.GREEN_slider=128;
                configisvalid=false;
                console.log('"GREEN_slider" was found to be invalid and was set to "128"');
            }
        }else{//else it does not exits
            this.data.GREEN_slider=128;
            configisvalid=false;
            console.log('"GREEN_slider" did not exist and was set to "128"');
        }
        
        if(this.data.RED_slider){//if it does exist
            if(this.data.RED_slider==undefined){
                this.data.RED_slider=128;
                configisvalid=false;
                console.log('"RED_slider" was found to be invalid and was set to "128"');
            }
        }else{//else it does not exits
            this.data.RED_slider=128;
            configisvalid=false;
            console.log('"RED_slider" did not exist and was set to "128"');
        }

        if(this.data.HEX_put){//if it does exist
            if(this.data.HEX_put==undefined){
                this.data.HEX_put='#ffffff';
                configisvalid=false;
                console.log('"HEX_put" was found to be invalid and was set to "#ffffff"');
            }
        }else{//else it does not exits
            this.data.HEX_put='#ffffff';
            configisvalid=false;
            console.log('"HEX_put" did not exist and was set to "#ffffff"');
        }
        
        if(this.data.HUE_slider){//if it does exist
            if(this.data.HUE_slider==undefined){
                this.data.HUE_slider=180;
                configisvalid=false;
                console.log('"HUE_slider" was found to be invalid and was set to "180"');
            }
        }else{//else it does not exits
            this.data.HUE_slider=180;
            configisvalid=false;
            console.log('"HUE_slider" did not exist and was set to "180"');
        }
        
        if(this.data.SATURATION_slider){//if it does exist
            if(this.data.SATURATION_slider==undefined){
                this.data.SATURATION_slider=100;
                configisvalid=false;
                console.log('"SATURATION_slider" was found to be invalid and was set to "100"');
            }
        }else{//else it does not exits
            this.data.SATURATION_slider=100;
            configisvalid=false;
            console.log('"SATURATION_slider" did not exist and was set to "100"');
        }
        
        if(this.data.LIGHTNESS_slider){//if it does exist
            if(this.data.LIGHTNESS_slider==undefined){
                this.data.LIGHTNESS_slider=50;
                configisvalid=false;
                console.log('"LIGHTNESS_slider" was found to be invalid and was set to "50"');
            }
        }else{//else it does not exits
            this.data.LIGHTNESS_slider=50;
            configisvalid=false;
            console.log('"LIGHTNESS_slider" did not exist and was set to "50"');
        }
        
        if(this.data.theme){//if it does exist
            if(this.data.theme==undefined){
                this.data.theme="light";
                configisvalid=false;
                console.log('"theme" was found to be invalid and was set to "light"');
            }
        }else{//else it does not exits
            this.data.theme="light";
            configisvalid=false;
            console.log('"theme" did not exist was set to "light"');
        }

        if(this.data.aggressive_mode){//if it does exist
            if(this.data.aggressive_mode==undefined){
                this.data.aggressive_mode=true;
                configisvalid=false;
                console.log('"aggressive_mode" was found to be invalid and was set to "true"');
            }
        }else{//else it does not exits
            if(this.data.aggressive_mode!=true && this.data.aggressive_mode!=false){
                this.data.aggressive_mode=true;
                configisvalid=false;
                console.log('"aggressive_mode" did not exist was set to "true"');
            }
        }

        if(this.data.colorheader){//if it does exist
            if(this.data.colorheader==undefined){
                this.data.colorheader=true;
                configisvalid=false;
                console.log('"colorheader" was found to be invalid and was set to "true"');
            }
        }else{//else it does not exits
            if(this.data.colorheader!=true && this.data.colorheader!=false){
                this.data.colorheader=true;
                configisvalid=false;
                console.log('"colorheader" did not exist was set to "true"');
            }
        }
        
        if(this.data.RED_put){//if it does exist
            if(this.data.RED_put==undefined){
                this.data.RED_put=122;
                configisvalid=false;
                console.log('"RED_put" was found to be invalid and was set to "122"');
            }
        }else{//else it does not exits
            this.data.RED_put=122;
            configisvalid=false;
            console.log('"RED_put" did not exist was set to "122"');
        }

        if(this.data.GREEN_put){//if it does exist
            if(this.data.GREEN_put==undefined){
                this.data.GREEN_put=122;
                configisvalid=false;
                console.log('"GREEN_put" was found to be invalid and was set to "122"');
            }
        }else{//else it does not exits
            this.data.GREEN_put=122;
            configisvalid=false;
            console.log('"GREEN_put" did not exist was set to "122"');
        }

        if(this.data.BLUE_put){//if it does exist
            if(this.data.BLUE_put==undefined){
                this.data.BLUE_put=122;
                configisvalid=false;
                console.log('"BLUE_put" was found to be invalid and was set to "122"');
            }
        }else{//else it does not exits
            this.data.BLUE_put=122;
            configisvalid=false;
            console.log('"BLUE_put" did not exist was set to "122"');
        }

        if(this.data.convertview){//if it does exist
            if(this.data.convertview==undefined){
                this.data.convertview="RGB";
                configisvalid=false;
                console.log('"convertview" was found to be invalid and was set to "RGB"');
            }
        }else{//else it does not exits
            this.data.convertview="RGB";
            configisvalid=false;
            console.log('"convertview" did not exist was set to "RGB"');
        }

        if(this.data.HUE_put){//if it does exist
            if(this.data.HUE_put==undefined){
                this.data.HUE_put=0;
                configisvalid=false;
                console.log('"HUE_put" was found to be invalid and was set to "122"');
            }
        }else{//else it does not exits
            this.data.HUE_put=0;
            configisvalid=false;
            console.log('"HUE_put" did not exist was set to "122"');
        }

        if(this.data.SAT_put){//if it does exist
            if(this.data.SAT_put==undefined){
                this.data.SAT_put=50;
                configisvalid=false;
                console.log('"SAT_put" was found to be invalid and was set to "122"');
            }
        }else{//else it does not exits
            this.data.SAT_put=50;
            configisvalid=false;
            console.log('"SAT_put" did not exist was set to "122"');
        }

        if(this.data.LIGHT_put){//if it does exist
            if(this.data.LIGHT_put==undefined){
                this.data.LIGHT_put=50;
                configisvalid=false;
                console.log('"LIGHT_put" was found to be invalid and was set to "122"');
            }
        }else{//else it does not exits
            this.data.LIGHT_put=50;
            configisvalid=false;
            console.log('"LIGHT_put" did not exist was set to "122"');
        }

        if(this.data.converthex_put){//if it does exist
            if(this.data.converthex_put==undefined){
                this.data.converthex_put='#ffffff';
                configisvalid=false;
                console.log('"converthex_put" was found to be invalid and was set to "#ffffff"');
            }
        }else{//else it does not exits
            this.data.converthex_put='#ffffff';
            configisvalid=false;
            console.log('"converthex_put" did not exist and was set to "#ffffff"');
        }

        if(!configisvalid){
            console.log('Config was found to be invalid. Changes were made to make it valid. Check log');
            this.save();//Save new confog because old config is no longer valid
        }
        else{
            console.log('config was found to be valid');
        }
    },
    delete:function(){//Does not delete the file itself. Just sets it to empty
        localStorage.clear(this.configlocation);
        console.log('config deleted: ');
        console.table(this.data);
        this.validate();//Usinag the validation function to make a new config here;
    }
}

    /*  Main Process    */
let mainprocess={
    tmp:{
        redput_touchx:0,
        greenput_touchx:0,
        blueput_touchx:0,
        hueput_touchx:0,
        satput_touchx:0,
        lightput_touchx:0,
    },
    RGB:{
        //Red slider handlers
        RED_slidertouchstart:document.getElementById('RED_slider').addEventListener('touchstart',()=>{mainprocess.RGB.process_RED()}),
        RED_slidertouchmove:document.getElementById('RED_slider').addEventListener('touchmove',()=>{mainprocess.RGB.process_RED()}),
        //RED_slidertouchend:document.getElementById('RED_slider').addEventListener('touchend',()=>{}),//temporary fave handlers
        process_RED:function(){
            setTimeout(()=>{
                config.data.RED_slider = document.getElementById('RED_slider').value;
                mainprocess.RGB.outputrgb();
            },50);
        },
        //Green slider handlers
        GREEN_slidertouchstart:document.getElementById('GREEN_slider').addEventListener('touchstart',()=>{mainprocess.RGB.process_GREEN()}),
        GREEN_slidertouchmove:document.getElementById('GREEN_slider').addEventListener('touchmove',()=>{mainprocess.RGB.process_GREEN()}),
        //GREEN_slidertouchend:document.getElementById('GREEN_slider').addEventListener('touchend',()=>{}),//temporary fave handlers
        process_GREEN:function(){
            setTimeout(()=>{
                config.data.GREEN_slider = document.getElementById('GREEN_slider').value;
                mainprocess.RGB.outputrgb();
            },50);
        },
        //Blue slider handlers
        BLUE_slidertouchmove:document.getElementById('BLUE_slider').addEventListener('touchmove',()=>{mainprocess.RGB.process_BLUE()}),
        BLUE_slidertouchstart:document.getElementById('BLUE_slider').addEventListener('touchstart',()=>{mainprocess.RGB.process_BLUE()}),
        //BLUE_slidertouchend:document.getElementById('BLUE_slider').addEventListener('touchend',()=>{}),//temporary fave handlers
        process_BLUE:function(){
            setTimeout(()=>{
                config.data.BLUE_slider = document.getElementById('BLUE_slider').value;
                mainprocess.RGB.outputrgb();
            },50);
        },
        //Random RGB button handler gets vale, sets config, outputs rgb
        randomRGB:document.getElementById('randRGB').addEventListener('touchstart',function(){
            var temprandRGB=rand.RGB();
            config.data.RED_slider=temprandRGB.RED;
            config.data.GREEN_slider=temprandRGB.GREEN;
            config.data.BLUE_slider=temprandRGB.BLUE;
            mainprocess.RGB.setsliders();
            //
        }),
        //Sets the sliders psoitions to the config.datauration files values
        setsliders:function(){
            document.getElementById('RED_slider').value=config.data.RED_slider;
            document.getElementById('GREEN_slider').value=config.data.GREEN_slider;
            document.getElementById('BLUE_slider').value=config.data.BLUE_slider;
            mainprocess.RGB.outputrgb();
        },
        //Output the RGB value to the RGB pannel
        outputrgb:function(){
            //Output the RGB value first
            document.getElementById('RGB_index').innerHTML='RGB('+config.data.RED_slider+','+config.data.GREEN_slider+','+config.data.BLUE_slider+')';
            document.getElementById('RGBview').style.backgroundColor='RGB( '+config.data.RED_slider+' , '+config.data.GREEN_slider+' , '+config.data.BLUE_slider+' )';
            if(config.data.RED_slider<128 && config.data.GREEN_slider<128 && config.data.BLUE_slider<128){//change background color of txt
                //background color is dark
                document.getElementById('RGBview').style.color='white';
                document.getElementById('randRGB').style.color='white';
                document.getElementById('randRGB').style.borderColor='white';
                document.getElementById('randRGB').style.boxShadow='white';
            }
            else{
                //background color is light
                document.getElementById('RGBview').style.color='black';
                document.getElementById('randRGB').style.color='black';
                document.getElementById('randRGB').style.borderColor='black';
                document.getElementById('randRGB').style.boxShadow='black';
            }
            document.getElementById('randRGB').style.backgroundColor='RGB( '+(config.data.RED_slider-40) +' , '+(config.data.GREEN_slider-40) +' , '+(config.data.BLUE_slider-40) +' )';
        },
    },
    HSL:{
        //Hue Slider handlers
        HUE_slidertouchstart:document.getElementById('HUE_slider').addEventListener('touchstart',()=>{mainprocess.HSL.process_HUE()}),
        HUE_slidertouchmove:document.getElementById('HUE_slider').addEventListener('touchmove',()=>{mainprocess.HSL.process_HUE()}),
        //HUE_slidertouchend:document.getElementById('HUE_slider').addEventListener('touchend',()=>{}),//temporary fave handlers
        process_HUE:function(){
            setTimeout(()=>{
                config.data.HUE_slider = document.getElementById('HUE_slider').value;
                mainprocess.HSL.outputhsl();
            },50);
        },
        //Saturation Slider Handlers
        SATURATION_slidertouchstart:document.getElementById('SATURATION_slider').addEventListener('touchstart',()=>{mainprocess.HSL.process_SATURATION()}),
        SATURATION_slidertouchmove:document.getElementById('SATURATION_slider').addEventListener('touchmove',()=>{mainprocess.HSL.process_SATURATION()}),
        //SATURATION_slidertouchend:document.getElementById('SATURATION_slider').addEventListener('touchend',()=>{}),//temporary fave handlers
        process_SATURATION:function(){
            setTimeout(()=>{
                config.data.SATURATION_slider = document.getElementById('SATURATION_slider').value;
                mainprocess.HSL.outputhsl();
            },50);
        },
        //Lightness slider handlers
        LIGHTNESS_slidertouchstart:document.getElementById('LIGHTNESS_slider').addEventListener('touchstart',()=>{mainprocess.HSL.process_Lightness()}),
        LIGHTNESS_slidertouchmove:document.getElementById('LIGHTNESS_slider').addEventListener('touchmove',()=>{mainprocess.HSL.process_Lightness()}),
        //LIGHTNESS_slidertouchend:document.getElementById('LIGHTNESS_slider').addEventListener('touchend',()=>{}),//temporary fave handlers
        process_Lightness:function(){
            setTimeout(()=>{
                config.data.LIGHTNESS_slider = document.getElementById('LIGHTNESS_slider').value;
                mainprocess.HSL.outputhsl();
            },50);
        },
        //Random HSL Button handler
        randomHSL:document.getElementById('randHSL').addEventListener('touchstart',function(){
            // splicing fucntion  Number(HSL.LIGHTENESS.slice(0,-1)
            var temprandHSL=rand.HSL();
            config.data.HUE_slider=temprandHSL.HUE;
            config.data.SATURATION_slider=Number(temprandHSL.SATURATION.slice(0,-1));//cuts string to be evaluated
            config.data.LIGHTNESS_slider=Number(temprandHSL.LIGHTENESS.slice(0,-1));//cuts string to be evaluated
            mainprocess.HSL.setsliders();
            //
        }),
        //Sets the sliders to the values in the config.data file
        setsliders:function(){
            document.getElementById('HUE_slider').value=config.data.HUE_slider;
            document.getElementById('SATURATION_slider').value=config.data.SATURATION_slider;
            document.getElementById('LIGHTNESS_slider').value=config.data.LIGHTNESS_slider;
            mainprocess.HSL.outputhsl();
        },
        //Outputs the HSL value to the HSL pannel
        outputhsl:function(){
            document.getElementById('HSL_index').innerHTML='HSL('+config.data.HUE_slider+','+config.data.SATURATION_slider+'%,'+config.data.LIGHTNESS_slider+'%)';
            document.getElementById('HSL_view').style.backgroundColor='HSL( '+config.data.HUE_slider+' , '+config.data.SATURATION_slider+'% , '+config.data.LIGHTNESS_slider+'% )';
            if(config.data.LIGHTNESS_slider<50){
                //background color is dark
                document.getElementById('HSL_view').style.color='white';
                document.getElementById('randHSL').style.color='white';
                document.getElementById('randHSL').style.borderColor='white';
                document.getElementById('randHSL').style.boxShadow='white';

            }
            else{
                //background color is light
                document.getElementById('HSL_view').style.color='black';
                document.getElementById('randHSL').style.color='black';
                document.getElementById('randHSL').style.borderColor='black';
                document.getElementById('randHSL').style.boxShadow='black';
            }
            document.getElementById('randHSL').style.backgroundColor='HSL( '+config.data.HUE_slider+' , '+config.data.SATURATION_slider+'% , '+(config.data.LIGHTNESS_slider-20)+'% )';
        }
    },
    HEX:{
        //Random hex button handler
        randHEX:document.getElementById('randHEX').addEventListener('touchstart',function(){
            var randhex = rand.HEX();
            document.getElementById('HEX_view').style.backgroundColor = randhex;
            document.getElementById('HEX_put').value=randhex;
            config.data.HEX_put=randhex;
            //
        }),
        HEX_put:document.getElementById('HEX_put').addEventListener('keydown',function(){
            setTimeout(()=>{
                document.getElementById('HEX_view').style.backgroundColor = document.getElementById('HEX_put').value;
                config.data.HEX_put=document.getElementById('HEX_put').value;
                //
            },50);
        }),
        _ff1500:document.getElementById('_ff1500').addEventListener('click',function(){
            config.data.HEX_put='#ff1500';
            setTimeout(() => {
                mainprocess.HEX.outputhex();
            }, 50);
        }),
        _e81d1d:document.getElementById('_e81d1d').addEventListener('click',function(){
            config.data.HEX_put='#e81d1d';
            setTimeout(() => {
                mainprocess.HEX.outputhex();
            }, 50);
        }),
        _e8b71d:document.getElementById('_e8b71d').addEventListener('click',function(){
            config.data.HEX_put='#e8b71d';
            setTimeout(() => {
                mainprocess.HEX.outputhex();
            }, 50);
        }),
        _e3e81d:document.getElementById('_e3e81d').addEventListener('click',function(){
            config.data.HEX_put='#e3e81d';
            setTimeout(() => {
                mainprocess.HEX.outputhex();
            }, 50);
        }),
        _1de840:document.getElementById('_1de840').addEventListener('click',function(){
            config.data.HEX_put='#1de840';
            setTimeout(() => {
                mainprocess.HEX.outputhex();
            }, 50);
        }),
        _1ddde8:document.getElementById('_1ddde8').addEventListener('click',function(){
            config.data.HEX_put='#1ddde8';
            setTimeout(() => {
                mainprocess.HEX.outputhex();
            }, 50);
        }),
        _2b1de8:document.getElementById('_2b1de8').addEventListener('click',function(){
            config.data.HEX_put='#2b1de8';
            setTimeout(() => {
                mainprocess.HEX.outputhex();
            }, 50);
        }),
        _dd00f3:document.getElementById('_dd00f3').addEventListener('click',function(){
            config.data.HEX_put='#dd00f3';
            setTimeout(() => {
                mainprocess.HEX.outputhex();
            }, 50);
        }),
        _000000:document.getElementById('_000000').addEventListener('click',function(){
            config.data.HEX_put='#000000';
            setTimeout(() => {
                mainprocess.HEX.outputhex();
            }, 50);
        }),
        _ffffff:document.getElementById('_ffffff').addEventListener('click',function(){
            config.data.HEX_put='#ffffff';
            setTimeout(() => {
                mainprocess.HEX.outputhex();
            }, 50);
        }),
        outputhex:function(){
            document.getElementById('HEX_put').value=config.data.HEX_put;
            document.getElementById('HEX_view').style.backgroundColor = config.data.HEX_put;
        },
    },
    CONVERT:{/* Conversion handler  */
        RGB:{
            /*  Red input handlers  */
            red_input:document.getElementById('red_input').addEventListener('keydown',function(){//process red input
                setTimeout(()=>{
                    var temp = document.getElementById('red_input').value;
                    if(temp<0){
                        temp=0;
                        document.getElementById('red_input').value=0;
                        document.getElementById('redput_downbtn').style.opacity='0.5';
                        notify.new('RGB','Minumum value for RGB colors is 0');
                    }else if(temp>255){
                        temp=255;
                        document.getElementById('red_input').value=255;
                        document.getElementById('redput_upbtn').style.opacity='0.5';
                        notify.new('RGB','Maximum value for RGB colors is 255');
                    }else{
                        document.getElementById('redput_upbtn').style.opacity='1';
                        document.getElementById('redput_downbtn').style.opacity='1';
                    }
                    config.data.RED_put = temp;
                    mainprocess.CONVERT.RGB.Output();
                    document.getElementById('red_bar').style.width=Number(config.data.RED_put/2.55 )+'%';
                },50);
            }),
            redput_upbtn:document.getElementById('redput_upbtn').addEventListener('touchstart',function(){//redinput up button
                var temp = Number(document.getElementById('red_input').value);
                temp++;
                if(temp>255){
                    temp=255;
                    document.getElementById('redput_upbtn').style.opacity='0.5';
                }else{
                    document.getElementById('redput_upbtn').style.opacity='1';
                    document.getElementById('redput_downbtn').style.opacity='1';
                }
                document.getElementById('red_input').value=temp;
                config.data.RED_put = temp;
                mainprocess.CONVERT.RGB.Output();
                document.getElementById('red_bar').style.width=Number(config.data.RED_put/2.55 )+'%';
            }),
            redput_downbtn:document.getElementById('redput_downbtn').addEventListener('touchstart',function(){//redinput down button
                var temp = Number(document.getElementById('red_input').value);
                temp--;
                if(temp<0){
                    temp=0;
                    document.getElementById('redput_downbtn').style.opacity='0.5';
                }else{
                    document.getElementById('redput_upbtn').style.opacity='1';
                    document.getElementById('redput_downbtn').style.opacity='1';
                }
                document.getElementById('red_input').value=temp;
                config.data.RED_put = temp;
                mainprocess.CONVERT.RGB.Output();
                document.getElementById('red_bar').style.width=Number(config.data.RED_put/2.55 )+'%';
            }),
            redput_touchslide:document.getElementById('red_input').addEventListener('touchmove',function(event){//red sliding input handler
                var x = event.touches[0].clientX;
                console.log('x position: ',x,' Previous X position',mainprocess.tmp.redput_touchx);
                if(x>mainprocess.tmp.redput_touchx){
                    if(config.data.RED_put!=255){
                        if(config.data.RED_put>254){
                            config.data.RED_put=255;
                            document.getElementById('red_input').value=255;
                            document.getElementById('redput_upbtn').style.opacity='0.5';
                            notify.new('RGB','Maximum value for RGB colors is 255');
                        }else{
                            config.data.RED_put=Number(config.data.RED_put+5);
                            document.getElementById('red_input').value=config.data.RED_put;
                            document.getElementById('redput_upbtn').style.opacity='1';
                            document.getElementById('redput_downbtn').style.opacity='1';
                        }
                        mainprocess.CONVERT.RGB.Output();
                    }
                }else{
                    if(config.data.RED_put!=0){
                        if(config.data.RED_put<0){
                            config.data.RED_put=0;
                            document.getElementById('red_input').value=0;
                            document.getElementById('redput_downbtn').style.opacity='0.5';
                            notify.new('RGB','Minumum value for RGB colors is 0');
                        }else{
                            config.data.RED_put=Number(config.data.RED_put-5);
                            document.getElementById('red_input').value=config.data.RED_put;
                            document.getElementById('redput_upbtn').style.opacity='1';
                            document.getElementById('redput_downbtn').style.opacity='1';
                        }
                        mainprocess.CONVERT.RGB.Output();
                    }
                }
                mainprocess.tmp.redput_touchx = x;
                document.getElementById('red_bar').style.width=Number(config.data.RED_put/2.55 )+'%';
            }),
            /*  Green input handlers  */
            green_input:document.getElementById('green_input').addEventListener('keydown',function(){//process red input
                setTimeout(()=>{
                    var temp = document.getElementById('green_input').value;
                    if(temp<0){
                        temp=0;
                        document.getElementById('green_input').value=0;
                        document.getElementById('greenput_downbtn').style.opacity='0.5';
                        notify.new('RGB','Minumum value for RGB colors is 0');
                    }else if(temp>255){
                        temp=255;
                        document.getElementById('green_input').value=255;
                        document.getElementById('greenput_upbtn').style.opacity='0.5';
                        notify.new('RGB','Maximum value for RGB colors is 255');
                    }else{
                        document.getElementById('greenput_upbtn').style.opacity='1';
                        document.getElementById('greenput_downbtn').style.opacity='1';
                    }
                    config.data.GREEN_put = temp;
                    mainprocess.CONVERT.RGB.Output();
                    document.getElementById('green_bar').style.width=Number(config.data.GREEN_put/2.55 )+'%';
                },50);
            }),
            greenput_upbtn:document.getElementById('greenput_upbtn').addEventListener('touchstart',function(){//greeninput up button
                var temp = Number(document.getElementById('green_input').value);
                temp++;
                if(temp>255){
                    temp=255;
                    document.getElementById('greenput_upbtn').style.opacity='0.5';
                }else{
                    document.getElementById('greenput_upbtn').style.opacity='1';
                    document.getElementById('greenput_downbtn').style.opacity='1';
                }
                document.getElementById('green_input').value=temp;
                config.data.GREEN_put = temp;
                mainprocess.CONVERT.RGB.Output();
                document.getElementById('green_bar').style.width=Number(config.data.GREEN_put/2.55 )+'%';
            }),
            greenput_downbtn:document.getElementById('greenput_downbtn').addEventListener('touchstart',function(){//greeninput down button
                var temp = Number(document.getElementById('green_input').value);
                temp--;
                if(temp<0){
                    temp=0;
                    document.getElementById('greenput_downbtn').style.opacity='0.5';
                }else{
                    document.getElementById('greenput_upbtn').style.opacity='1';
                    document.getElementById('greenput_downbtn').style.opacity='1';
                }
                document.getElementById('green_input').value=temp;
                config.data.GREEN_put = temp;
                mainprocess.CONVERT.RGB.Output();
                document.getElementById('green_bar').style.width=Number(config.data.GREEN_put/2.55 )+'%';
            }),
            greenput_touchslide:document.getElementById('green_input').addEventListener('touchmove',function(event){//green sliding input handler
                var x = event.touches[0].clientX;
                console.log('x position: ',x,' Previous X position',mainprocess.tmp.greenput_touchx);
                if(x>mainprocess.tmp.greenput_touchx){
                    if(config.data.GREEN_put!=255){
                        if(config.data.GREEN_put>254){
                            config.data.GREEN_put=255;
                            document.getElementById('green_input').value=255;
                            document.getElementById('greenput_upbtn').style.opacity='0.5';
                            notify.new('RGB','Maximum value for RGB colors is 255');
                        }else{
                            config.data.GREEN_put=Number(config.data.GREEN_put+5);
                            document.getElementById('green_input').value=config.data.GREEN_put;
                            document.getElementById('greenput_upbtn').style.opacity='1';
                            document.getElementById('greenput_downbtn').style.opacity='1';
                        }
                        mainprocess.CONVERT.RGB.Output();
                    }
                }else{
                    if(config.data.GREEN_put!=0){
                        if(config.data.GREEN_put<0){
                            config.data.GREEN_put=0;
                            document.getElementById('green_input').value=0;
                            document.getElementById('greenput_downbtn').style.opacity='0.5';
                            notify.new('RGB','Minumum value for RGB colors is 0');
                        }else{
                            config.data.GREEN_put=Number(config.data.GREEN_put-5);
                            document.getElementById('green_input').value=config.data.GREEN_put;
                            document.getElementById('greenput_upbtn').style.opacity='1';
                            document.getElementById('greenput_downbtn').style.opacity='1';
                        }
                        mainprocess.CONVERT.RGB.Output();
                    }
                }
                mainprocess.tmp.greenput_touchx = x;
                document.getElementById('green_bar').style.width=Number(config.data.GREEN_put/2.55 )+'%';
            }),
            /*  Blue input handlers  */
            blue_input:document.getElementById('blue_input').addEventListener('keydown',function(){//process red input
                setTimeout(()=>{
                    var temp = document.getElementById('blue_input').value;
                    if(temp<0){
                        temp=0;
                        document.getElementById('blue_input').value=0;
                        document.getElementById('blueput_downbtn').style.opacity='0.5';
                        
                    }else if(temp>255){
                        temp=255;
                        document.getElementById('blue_input').value=255;
                        document.getElementById('blueput_upbtn').style.opacity='0.5';
                        
                    }else{
                        document.getElementById('blueput_upbtn').style.opacity='1';
                        document.getElementById('blueput_downbtn').style.opacity='1';
                    }
                    config.data.BLUE_put = temp;
                    mainprocess.CONVERT.RGB.Output();
                    document.getElementById('blue_bar').style.width=Number(config.data.BLUE_put/2.55 )+'%';
                },50);
            }),
            blueput_upbtn:document.getElementById('blueput_upbtn').addEventListener('touchstart',function(){//greeninput up button
                var temp = Number(document.getElementById('blue_input').value);
                temp++;
                if(temp>255){
                    temp=255;
                    document.getElementById('blueput_upbtn').style.opacity='0.5';
                }else{
                    document.getElementById('blueput_upbtn').style.opacity='1';
                    document.getElementById('blueput_downbtn').style.opacity='1';
                }
                document.getElementById('blue_input').value=temp;
                config.data.BLUE_put = temp;
                mainprocess.CONVERT.RGB.Output();
                document.getElementById('blue_bar').style.width=Number(config.data.BLUE_put/2.55 )+'%';
            }),
            blueput_downbtn:document.getElementById('blueput_downbtn').addEventListener('touchstart',function(){//greeninput down button
                var temp = Number(document.getElementById('blue_input').value);
                temp--;
                if(temp<0){
                    temp=0;
                    document.getElementById('blueput_downbtn').style.opacity='0.5';
                }else{
                    document.getElementById('blueput_upbtn').style.opacity='1';
                    document.getElementById('blueput_downbtn').style.opacity='1';
                }
                document.getElementById('blue_input').value=temp;
                config.data.BLUE_put = temp;
                mainprocess.CONVERT.RGB.Output();
                document.getElementById('blue_bar').style.width=Number(config.data.BLUE_put/2.55 )+'%';
            }),
            blueput_touchslide:document.getElementById('blue_input').addEventListener('touchmove',function(event){//blue sliding input handler
                var x = event.touches[0].clientX;
                console.log('x position: ',x,' Previous X position',mainprocess.tmp.blueput_touchx);
                if(x>mainprocess.tmp.blueput_touchx){
                    if(config.data.BLUE_put!=255){
                        if(config.data.BLUE_put>254){
                            config.data.BLUE_put=255;
                            document.getElementById('blue_input').value=255;
                            document.getElementById('blueput_upbtn').style.opacity='0.5';
                        
                        }else{
                            config.data.BLUE_put=Number(config.data.BLUE_put+5);
                            document.getElementById('blue_input').value=config.data.BLUE_put;
                            document.getElementById('blueput_upbtn').style.opacity='1';
                            document.getElementById('blueput_downbtn').style.opacity='1';
                        }
                        mainprocess.CONVERT.RGB.Output();
                    }
                }else{
                    if(config.data.BLUE_put!=0){
                        if(config.data.BLUE_put<0){
                            config.data.BLUE_put=0;
                            document.getElementById('blue_input').value=0;
                            document.getElementById('blueput_downbtn').style.opacity='0.5';                            
                        }else{
                            config.data.BLUE_put=Number(config.data.BLUE_put-5);
                            document.getElementById('blue_input').value=config.data.BLUE_put;
                            document.getElementById('blueput_upbtn').style.opacity='1';
                            document.getElementById('blueput_downbtn').style.opacity='1';
                        }
                        mainprocess.CONVERT.RGB.Output();
                    }
                }
                mainprocess.tmp.blueput_touchx = x;
                document.getElementById('blue_bar').style.width=Number(config.data.BLUE_put/2.55 )+'%';
            }),
            Output:function(){
                document.getElementById('colorpreview_RGB').style.backgroundColor='RGB('+config.data.RED_put+','+config.data.GREEN_put+','+config.data.BLUE_put+')';
                document.getElementById('colorpreview_RGB_joint').style.backgroundColor='RGB('+config.data.RED_put+','+config.data.GREEN_put+','+config.data.BLUE_put+')';
                document.getElementById('RGB_HEX_conversion').innerHTML='HEX: '+this.RGBtoHEX();
                var tmphslobj = this.rgbToHsl(config.data.RED_put,config.data.GREEN_put,config.data.BLUE_put);
                //Number and to fixed functions are used to facilitate normalization of the values
                document.getElementById('RGB_HSL_conversion').innerHTML= 'HSL:('+Number(tmphslobj.h*360).toFixed(0)+','+Number(tmphslobj.s*100).toFixed(0)+'%,'+Number(tmphslobj.l*100).toFixed(0)+'%)';
                if(config.data.RED_put<128 && config.data.GREEN_put<128 && config.data.BLUE_put<128){//change background color of txt
                    //background color is dark
                    document.getElementById('colorpreview_text_RGB').style.color='white';
                    document.getElementById('RGB_HSL_conversion').style.color='white';
                    document.getElementById('RGB_HEX_conversion').style.color='white';
                }
                else{
                    //background color is light
                    document.getElementById('colorpreview_text_RGB').style.color='black';
                    document.getElementById('RGB_HSL_conversion').style.color='black';
                    document.getElementById('RGB_HEX_conversion').style.color='black';
                }
                //
            },
            setvalues:function(){
                document.getElementById('blue_input').value=config.data.BLUE_put;
                document.getElementById('blue_bar').style.width=Number(config.data.BLUE_put/2.55 )+'%';
                document.getElementById('green_input').value=config.data.GREEN_put;
                document.getElementById('green_bar').style.width=Number(config.data.GREEN_put/2.55 )+'%';
                document.getElementById('red_input').value=config.data.RED_put;
                document.getElementById('red_bar').style.width=Number(config.data.RED_put/2.55 )+'%';
            },
            RGBtoHEX:function(){
                var redhex = Number(config.data.RED_put).toString(16);
                var greenhex = Number(config.data.BLUE_put).toString(16);
                var bluehex = Number(config.data.GREEN_put).toString(16);
                if(redhex==0){redhex='00'}
                if(greenhex==0){greenhex='00'}
                if(bluehex==0){bluehex='00'}
                return'#'+redhex+greenhex+bluehex;
            },
            rgbToHsl:function(r, g, b) {
                r /= 255, g /= 255, b /= 255;
              
                var max = Math.max(r, g, b), min = Math.min(r, g, b);
                var h, s, l = (max + min) / 2;
              
                if (max == min) {
                  h = s = 0; // achromatic
                } else {
                  var d = max - min;
                  s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
              
                  switch (max) {
                    case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                    case g: h = (b - r) / d + 2; break;
                    case b: h = (r - g) / d + 4; break;
                  }
              
                  h /= 6;
                }
                return { h, s, l };
            },
        },
        HSL:{
            /*  Hue input handlers  */
            hue_input:document.getElementById('hue_input').addEventListener('keydown',function(){//process hue input
                setTimeout(()=>{
                    var temp = document.getElementById('hue_input').value;
                    if(temp<0){
                        temp=0;
                        document.getElementById('hue_input').value=0;
                        document.getElementById('hueput_downbtn').style.opacity='0.5';
                        notify.new('Hue','Minumum value for Hue colors is 0');
                    }else if(temp>360){
                        temp=360;
                        document.getElementById('hue_input').value=360;
                        document.getElementById('hueput_upbtn').style.opacity='0.5';
                        notify.new('Hue','Maximum value for Hue colors is 360');
                    }else{
                        document.getElementById('hueput_upbtn').style.opacity='1';
                        document.getElementById('hueput_downbtn').style.opacity='1';
                    }
                    config.data.HUE_put = temp;
                    mainprocess.CONVERT.HSL.Output();
                    document.getElementById('hue_bar').style.width= Number(config.data.HUE_put/3.6)+'%';
                },50);
            }),
            hueput_upbtn:document.getElementById('hueput_upbtn').addEventListener('touchstart',function(){//redinput up button
                var temp = Number(document.getElementById('hue_input').value);
                temp++;
                if(temp>360){
                    temp=360;
                    document.getElementById('hueput_upbtn').style.opacity='0.5';
                }else{
                    document.getElementById('hueput_upbtn').style.opacity='1';
                    document.getElementById('hueput_downbtn').style.opacity='1';
                }
                document.getElementById('hue_input').value=temp;
                config.data.HUE_put = temp;
                mainprocess.CONVERT.HSL.Output();
                document.getElementById('hue_bar').style.width= Number(config.data.HUE_put/3.6)+'%';
            }),
            hueput_downbtn:document.getElementById('hueput_downbtn').addEventListener('touchstart',function(){//redinput down button
                var temp = Number(document.getElementById('hue_input').value);
                temp--;
                if(temp<0){
                    temp=0;
                    document.getElementById('hueput_downbtn').style.opacity='0.5';
                }else{
                    document.getElementById('hueput_upbtn').style.opacity='1';
                    document.getElementById('hueput_downbtn').style.opacity='1';
                }
                document.getElementById('hue_input').value=temp;
                config.data.HUE_put = temp;
                mainprocess.CONVERT.HSL.Output();
                document.getElementById('hue_bar').style.width= Number(config.data.HUE_put/3.6)+'%';
            }),
            hueput_touchslide:document.getElementById('hue_input').addEventListener('touchmove',function(event){//red sliding input handler
                var x = event.touches[0].clientX;
                console.log('x position: ',x,' Previous X position',mainprocess.tmp.hueput_touchx);
                if(x>mainprocess.tmp.hueput_touchx){
                    if(config.data.HUE_put!=360){
                        if(config.data.HUE_put>359){
                            config.data.HUE_put=360;
                            document.getElementById('hue_input').value=360;
                            document.getElementById('hueput_upbtn').style.opacity='0.5';
                        }else{
                            config.data.HUE_put=Number(config.data.HUE_put+5);
                            document.getElementById('hue_input').value=config.data.HUE_put;
                            document.getElementById('hueput_upbtn').style.opacity='1';
                            document.getElementById('hueput_downbtn').style.opacity='1';
                        }
                    }
                }else{
                    if(config.data.HUE_put!=0){
                        if(config.data.HUE_put<0){
                            config.data.HUE_put=0;
                            document.getElementById('hue_input').value=0;
                            document.getElementById('hueput_downbtn').style.opacity='0.5';
                        }else{
                            config.data.HUE_put=Number(config.data.HUE_put-5);
                            document.getElementById('hue_input').value=config.data.HUE_put;
                            document.getElementById('hueput_upbtn').style.opacity='1';
                            document.getElementById('hueput_downbtn').style.opacity='1';
                        }
                    }
                }
                mainprocess.CONVERT.HSL.Output();
                mainprocess.tmp.hueput_touchx = x;
                document.getElementById('hue_bar').style.width= Number(config.data.HUE_put/3.6)+'%';
            }),

            /*  Satturation input handlers  */
            sat_input:document.getElementById('sat_input').addEventListener('keydown',function(){//process hue input
                setTimeout(()=>{
                    var temp = document.getElementById('sat_input').value;
                    if(temp<0){
                        temp=0;
                        document.getElementById('sat_input').value=0;
                        document.getElementById('satput_downbtn').style.opacity='0.5';
                        notify.new('Saturation','Minumum value for Saturation colors is 0%');
                    }else if(temp>100){
                        temp=100;
                        document.getElementById('sat_input').value=100;
                        document.getElementById('satput_upbtn').style.opacity='0.5';
                        notify.new('Saturation','Maximum value for Saturation colors is 100%');
                    }else{
                        document.getElementById('satput_upbtn').style.opacity='1';
                        document.getElementById('satput_downbtn').style.opacity='1';
                    }
                    config.data.SAT_put = temp;
                    mainprocess.CONVERT.HSL.Output();
                    document.getElementById('sat_bar').style.width= Number(config.data.SAT_put)+'%';
                },50);
            }),
            satput_upbtn:document.getElementById('satput_upbtn').addEventListener('touchstart',function(){//redinput up button
                var temp = Number(document.getElementById('sat_input').value);
                temp++;
                if(temp>100){
                    temp=100;
                    document.getElementById('satput_upbtn').style.opacity='0.5';
                }else{
                    document.getElementById('satput_upbtn').style.opacity='1';
                    document.getElementById('satput_downbtn').style.opacity='1';
                }
                document.getElementById('sat_input').value=temp;
                config.data.SAT_put = temp;
                mainprocess.CONVERT.HSL.Output();
                document.getElementById('sat_bar').style.width= Number(config.data.SAT_put)+'%';
            }),
            satput_downbtn:document.getElementById('satput_downbtn').addEventListener('touchstart',function(){//redinput down button
                var temp = Number(document.getElementById('sat_input').value);
                temp--;
                if(temp<0){
                    temp=0;
                    document.getElementById('satput_downbtn').style.opacity='0.5';
                }else{
                    document.getElementById('satput_upbtn').style.opacity='1';
                    document.getElementById('satput_downbtn').style.opacity='1';
                }
                document.getElementById('sat_input').value=temp;
                config.data.SAT_put = temp;
                mainprocess.CONVERT.HSL.Output();
                document.getElementById('sat_bar').style.width= Number(config.data.SAT_put)+'%';
            }),
            satput_touchslide:document.getElementById('sat_input').addEventListener('touchmove',function(event){//red sliding input handler
                var x = event.touches[0].clientX;
                console.log('x position: ',x,' Previous X position',mainprocess.tmp.satput_touchx);
                if(x>mainprocess.tmp.satput_touchx){
                    if(config.data.SAT_put!=100){
                        if(config.data.SAT_put>99){
                            config.data.SAT_put=100;
                            document.getElementById('sat_input').value=100;
                            document.getElementById('satput_upbtn').style.opacity='0.5';
                        }else{
                            config.data.SAT_put=Number(config.data.SAT_put+2);
                            document.getElementById('sat_input').value=config.data.SAT_put;
                            document.getElementById('satput_upbtn').style.opacity='1';
                            document.getElementById('satput_downbtn').style.opacity='1';
                        }
                        mainprocess.CONVERT.HSL.Output();
                    }
                }else{
                    if(config.data.SAT_put!=0){
                        if(config.data.SAT_put<0){
                            config.data.SAT_put=0;
                            document.getElementById('sat_input').value=0;
                            document.getElementById('satput_downbtn').style.opacity='0.5';
                        }else{
                            config.data.SAT_put=Number(config.data.SAT_put-2);
                            document.getElementById('sat_input').value=config.data.SAT_put;
                            document.getElementById('satput_upbtn').style.opacity='1';
                            document.getElementById('satput_downbtn').style.opacity='1';
                        }
                        mainprocess.CONVERT.HSL.Output();
                    }
                }
                mainprocess.tmp.satput_touchx = x;
                document.getElementById('sat_bar').style.width= Number(config.data.SAT_put)+'%';
            }),

            /*  Light input handlers  */
            light_input:document.getElementById('light_input').addEventListener('keydown',function(){//process hue input
                setTimeout(()=>{
                    var temp = document.getElementById('light_input').value;
                    if(temp<0){
                        temp=0;
                        document.getElementById('light_input').value=0;
                        document.getElementById('lightput_downbtn').style.opacity='0.5';
                        notify.new('Saturation','Minumum value for Saturation colors is 0%');
                    }else if(temp>100){
                        temp=100;
                        document.getElementById('light_input').value=100;
                        document.getElementById('lightput_upbtn').style.opacity='0.5';
                        notify.new('Saturation','Maximum value for Saturation colors is 100%');
                    }else{
                        document.getElementById('lightput_upbtn').style.opacity='1';
                        document.getElementById('lightput_downbtn').style.opacity='1';
                    }
                    config.data.LIGHT_put = temp;
                    mainprocess.CONVERT.HSL.Output();
                    document.getElementById('light_bar').style.width= Number(config.data.LIGHT_put)+'%';
                },50);
            }),
            lightput_upbtn:document.getElementById('lightput_upbtn').addEventListener('touchstart',function(){//redinput up button
                var temp = Number(document.getElementById('light_input').value);
                temp++;
                if(temp>100){
                    temp=100;
                    document.getElementById('lightput_upbtn').style.opacity='0.5';
                }else{
                    document.getElementById('lightput_upbtn').style.opacity='1';
                    document.getElementById('lightput_downbtn').style.opacity='1';
                }
                document.getElementById('light_input').value=temp;
                config.data.LIGHT_put = temp;
                mainprocess.CONVERT.HSL.Output();
                document.getElementById('light_bar').style.width= Number(config.data.LIGHT_put)+'%';
            }),
            lightput_downbtn:document.getElementById('lightput_downbtn').addEventListener('touchstart',function(){//redinput down button
                var temp = Number(document.getElementById('light_input').value);
                temp--;
                if(temp<0){
                    temp=0;
                    document.getElementById('lightput_downbtn').style.opacity='0.5';
                }else{
                    document.getElementById('lightput_upbtn').style.opacity='1';
                    document.getElementById('lightput_downbtn').style.opacity='1';
                }
                document.getElementById('light_input').value=temp;
                config.data.LIGHT_put = temp;
                mainprocess.CONVERT.HSL.Output();
                document.getElementById('light_bar').style.width= Number(config.data.LIGHT_put)+'%';
            }),
            lightput_touchslide:document.getElementById('light_input').addEventListener('touchmove',function(event){//red sliding input handler
                var x = event.touches[0].clientX;
                console.log('x position: ',x,' Previous X position',mainprocess.tmp.lightput_touchx);
                if(x>mainprocess.tmp.lightput_touchx){
                    if(config.data.LIGHT_put!=100){
                        if(config.data.LIGHT_put>99){
                            config.data.LIGHT_put=100;
                            document.getElementById('light_input').value=100;
                            document.getElementById('lightput_upbtn').style.opacity='0.5';
                        }else{
                            config.data.LIGHT_put=Number(config.data.LIGHT_put+2);
                            document.getElementById('light_input').value=config.data.LIGHT_put;
                            document.getElementById('lightput_upbtn').style.opacity='1';
                            document.getElementById('lightput_downbtn').style.opacity='1';
                        }
                        mainprocess.CONVERT.HSL.Output();
                    }
                }else{
                    if(config.data.LIGHT_put!=0){
                        if(config.data.LIGHT_put<0){
                            config.data.LIGHT_put=0;
                            document.getElementById('light_input').value=0;
                            document.getElementById('lightput_downbtn').style.opacity='0.5';
                        }else{
                            config.data.LIGHT_put=Number(config.data.LIGHT_put-2);
                            document.getElementById('light_input').value=config.data.LIGHT_put;
                            document.getElementById('lightput_upbtn').style.opacity='1';
                            document.getElementById('lightput_downbtn').style.opacity='1';
                        }
                        mainprocess.CONVERT.HSL.Output();
                    }
                }
                mainprocess.tmp.lightput_touchx = x;
                document.getElementById('light_bar').style.width= Number(config.data.LIGHT_put)+'%';
            }),

            Output:function(){
                document.getElementById('colorpreview_HSL').style.backgroundColor='HSL('+config.data.HUE_put+','+config.data.SAT_put+'%,'+config.data.LIGHT_put+'%)';
                document.getElementById('colorpreview_HSL_joint').style.backgroundColor='HSL('+config.data.HUE_put+','+config.data.SAT_put+'%,'+config.data.LIGHT_put+'%)';
                var RGB_obj = mainprocess.CONVERT.HSL.hslToRgb(Number(config.data.HUE_put/360),Number(config.data.SAT_put/100),Number(config.data.LIGHT_put/100));
                var redhex = RGB_obj.red.toString(16);
                var greenhex = RGB_obj.green.toString(16);
                var bluehex = RGB_obj.blue.toString(16);
                if(redhex==0){redhex='00'}
                if(greenhex==0){greenhex='00'}
                if(bluehex==0){bluehex='00'}
                document.getElementById('HSL_RGB_conversion').innerHTML='RGB('+RGB_obj.red+','+RGB_obj.green+','+RGB_obj.blue+')';
                document.getElementById('HSL_HEX_conversion').innerHTML='HEX: '+redhex+''+greenhex+''+bluehex+'';
                if(config.data.LIGHT_put<50){//change background color of txt
                    //background color is dark
                    document.getElementById('colorpreview_text_HSL').style.color='white';
                    document.getElementById('HSL_RGB_conversion').style.color='white';
                    document.getElementById('HSL_HEX_conversion').style.color='white';
                }
                else{
                    //background color is light
                    document.getElementById('colorpreview_text_HSL').style.color='black';
                    document.getElementById('HSL_RGB_conversion').style.color='black';
                    document.getElementById('HSL_HEX_conversion').style.color='black';
                }
                //
            },
            setvalues:function(){
                document.getElementById('hue_input').value=config.data.HUE_put;
                document.getElementById('hue_bar').style.width= Number(config.data.HUE_put/3.6)+'%';
                document.getElementById('sat_input').value=config.data.SAT_put;
                document.getElementById('sat_bar').style.width= Number(config.data.SAT_put)+'%';
                document.getElementById('light_input').value=config.data.LIGHT_put;
                document.getElementById('light_bar').style.width= Number(config.data.LIGHT_put)+'%';
            },
            hslToRgb:function(h, s, l){
            
                var r, g, b;
            
                if(s == 0){
                    r = g = b = l; // achromatic
                }else{
                    var hue2rgb = function hue2rgb(p, q, t){
                        if(t < 0) t += 1;
                        if(t > 1) t -= 1;
                        if(t < 1/6) return p + (q - p) * 6 * t;
                        if(t < 1/2) return q;
                        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                        return p;
                    }
            
                    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                    var p = 2 * l - q;
                    r = hue2rgb(p, q, h + 1/3);
                    g = hue2rgb(p, q, h);
                    b = hue2rgb(p, q, h - 1/3);
                }
                return {red:Math.round(r * 255), green:Math.round(g * 255), blue:Math.round(b * 255)};
            },
        },
        HEX:{
            HEX_put2:document.getElementById('HEX_put2').addEventListener('keydown',function(){
                setTimeout(()=>{
                    var hex_put= document.getElementById('HEX_put2').value;
                    if(hex_put.length>7){
                        document.getElementById('HEX_put2').value=config.data.convert_put;
                        notify.new('Hexidecimal','Hex color values are usually 6 digits long plus the "#"');
                        mainprocess.CONVERT.HEX.Output(config.data.convert_put);
                    }
                    else{
                        mainprocess.CONVERT.HEX.Output(hex_put);
                        config.data.convert_put = hex_put;
                    }
                    //
                },50);
            }),
            Output:function(hex_put){
                var RGB_obj=this.HEXtoRGB(hex_put);
                var tmphslobj=this.rgbToHsl(RGB_obj.red,RGB_obj.green,RGB_obj.blue);
                document.getElementById('HEX_RGB_conversion').innerHTML='RGB('+RGB_obj.red+','+RGB_obj.green+','+RGB_obj.blue+')';
                document.getElementById('HEX_HSL_conversion').innerHTML='HSL:('+Number(tmphslobj.h*360).toFixed(0)+','+Number(tmphslobj.s*100).toFixed(0)+'%,'+Number(tmphslobj.l*100).toFixed(0)+'%)';
                document.getElementById('colorpreview_hex').style.backgroundColor=hex_put
                if(tmphslobj.l<0.50){//change background color of txt
                    //background color is dark
                    document.getElementById('colorpreview_hex').style.color='white';
                }
                else{
                    //background color is light
                    document.getElementById('colorpreview_hex').style.color='black';
                }
            },
            setvalues:function(){
                document.getElementById('HEX_put2').value=config.data.converthex_put;
            },
            HEXtoRGB:function(hex_put){
                var redhex = hex_put.slice(1,-4);
                var greenhex = hex_put.slice(3,-2);
                var bluehex = hex_put.slice(5);
                if(redhex==0){redhex='00'}
                if(greenhex==0){greenhex='00'}
                if(bluehex==0){bluehex='00'}
                return{red:parseInt(redhex,16),green:parseInt(greenhex,16),blue:parseInt(bluehex,16)};
            },
            rgbToHsl:function(r, g, b) {
                r /= 255, g /= 255, b /= 255;
              
                var max = Math.max(r, g, b), min = Math.min(r, g, b);
                var h, s, l = (max + min) / 2;
              
                if (max == min) {
                  h = s = 0; // achromatic
                } else {
                  var d = max - min;
                  s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
              
                  switch (max) {
                    case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                    case g: h = (b - r) / d + 2; break;
                    case b: h = (r - g) / d + 4; break;
                  }
              
                  h /= 6;
                }
                return { h, s, l };
            },
        },
    },
    /*  Settingts view handler  */
    settings:{
        theme:{//theme switch handler
            click:document.getElementById('themeswitchbdy').addEventListener('click',function(){
                console.log('Theme switch touchstart trigger');
                mainprocess.settings.theme.flip();}
            ),
            flip:function(){
                console.log('Theme switch triggered');
                if(config.data.theme=="light"){
                    //turn off the switch
                    config.data.theme="dark";
                    console.log('Theme configuration set to dark');
                }else if(config.data.theme=="dark"){
                    //turn on the witch
                    config.data.theme="light";
                    console.log('Theme configuration set to light');
                }
                mainprocess.settings.theme.setposition();
                config.save();
            },
            setposition:function(){
                console.log('Theme switch Position is changing');
                if(config.data.theme=="light"){
                    //turn off the switch
                    document.getElementById('theme_container').className='switch_container_active';
                    document.getElementById('maincss').href='css/light_theme.css';
                    console.log('Theme set to "light"');
                }else if(config.data.theme=="dark"){
                    //turn on the witch
                    document.getElementById('theme_container').className='switch_container_dissabled';
                    document.getElementById('maincss').href='css/AMOLED-dark_theme.css';
                    console.log('Theme switch set to "off"');
                }

            },
        },
        aggressive_mode:{
            click:document.getElementById('aggressivemodeswitchbdy').addEventListener('click',function(){mainprocess.settings.aggressive_mode.flip();}),
            flip:function(){
                console.log('aggressivemode switch triggered');
                if(config.data.aggressive_mode){
                    //turn off the switch
                    config.data.aggressive_mode=false;
                    console.log('aggressivemode configuration set to false');
                }else{
                    //turn on the witch
                    config.data.aggressive_mode=true;
                    console.log('aggressivemode configuration set to true');
                }
                config.save();
                mainprocess.setting_reload();
                mainprocess.settings.aggressive_mode.setposition();
            },
            setposition:function(){
                console.log('Theme switch Position is changing');
                if(config.data.aggressive_mode){
                    //turn off the switch
                    document.getElementById('aggressivemode_container').className='switch_container_active';
                    console.log('aggressive_mode switch set to "on"');
                }else{
                    //turn on the witch
                    document.getElementById('aggressivemode_container').className='switch_container_dissabled';
                    console.log('aggressive_mode switch set to "off"');
                }
            },
        },
        colorheader:{
            click:document.getElementById('colorheaderwitchbdy').addEventListener('click',function(){mainprocess.settings.colorheader.flip();}),
            flip:function(){
                console.log('colorheader switch triggered');
                if(config.data.colorheader){
                    //turn off the switch
                    config.data.colorheader=false;
                    console.log('colorheader configuration set to false');
                }else{
                    //turn on the witch
                    config.data.colorheader=true;
                    console.log('colorheader configuration set to true');
                }
                config.save();
                mainprocess.settings.colorheader.setposition();
                setTimeout(() => { UI.header.color(); }, 100);
            },
            setposition:function(){
                console.log('Theme switch Position is changing');
                if(config.data.colorheader){
                    //turn off the switch
                    document.getElementById('colorheader_container').className='switch_container_active';
                    console.log('colorheader switch set to "on"');
                }else{
                    //turn on the witch
                    document.getElementById('colorheader_container').className='switch_container_dissabled';
                    console.log('colorheader switch set to "off"');
                }
            },
        },
    },
    about:{
        email_btn:document.getElementById('email_btn').addEventListener('click',function(){
            mainprocess.copy_clipboard("samuelmatheson15@gmail.com");
            notify.new('clipboard','"samuelmatheson15@gmail.com" was coppied to your clipboard');
        }),
        phone_numberbtn:document.getElementById('phone_numberbtn').addEventListener('click',function(){
            mainprocess.copy_clipboard("+1 (876) 574-4801");
            notify.new('clipboard','"+1 (876) 574-4801" was coppied to your clipboard');
        }),
        name_btn:document.getElementById('name_btn').addEventListener('click',function(){
            mainprocess.copy_clipboard("Samuel A. Matheson");
            notify.new('clipboard','"Samuel A. Matheson" was coppied to your clipboard');
        }),
    },
    aggressive_mode_action:function(){//Aggressive mode actions, seperate from aggressive behaviour throught the script
        config.save();
        console.log('Aggressive mode saved the config');
    },
    setting_reload:function(){
        notify.new('Setting change','That change will take a momment to be facilitated');
        setTimeout(()=>{location.reload()},5000);
    },
    copy_clipboard:function(copyText) {/*Clipboard handler*/
        console.log('Copy text function was called with :"'+copyText+'"');
        copyText.toString(); //Makes it a string so the clipboard will accept it
        var temptxtbox = document.createElement("input"); //creates an 'input' element and assigns it to 'temptxtbox'
        document.body.appendChild(temptxtbox); //Puts the input element into the document
        temptxtbox.setAttribute("id", "temp_copy"); //Assigns an id to the input element
        document.getElementById("temp_copy").value = copyText; //Puts the txt u want to copy into the input element
        temptxtbox.select(); //Makes the curser select the text that's in the input element
        document.execCommand("copy"); //Commands the document to copy the selected text
        document.body.removeChild(temptxtbox); //Removes the input element from the document
    },
}

    /*  UI trickery */
var UI={
    menu:{
        touchstart:document.getElementById('menubtn').addEventListener('touchstart',function(){
            console.log('Menu Touchstart trigger');
            UI.menu.show();
            notify.clearall();
        }),
        show:function(){
            console.log('menu shown');
            document.getElementById('menuholder').style.transform='translate(0vw,0vh)';
            UI.pageshade.show();
        },
        hide:function(){
            console.log('menu hidden');
            document.getElementById('menuholder').style.transform='translate(-100vw,0vh)';
            UI.pageshade.hide();
            config.save();
        },
        RGBclick:document.getElementById('RGB_menubtn').addEventListener('click',function(){
            console.log('RGB menu button clicked');
            UI.navigate.RGB();
            UI.navigate.index.push(config.data.view);
            config.data.view="RGB";
        }),
        HSLclick:document.getElementById('HSL_menubtn').addEventListener('click',function(){
            console.log('HSL menu button clicked');
            UI.navigate.HSL();
            UI.navigate.index.push(config.data.view);
            config.data.view="HSL";
        }),
        HEXclick:document.getElementById('HEX_menubtn').addEventListener('click',function(){
            console.log('HEX menu button clicked');
            UI.navigate.HEX();
            UI.navigate.index.push(config.data.view);
            config.data.view="HEX";
        }),
        CONVERTclick:document.getElementById('CONVERT_menubtn').addEventListener('click',function(){
            console.log('CONVERT menu button clicked');
            UI.navigate.CONVERT();
            UI.navigate.index.push(config.data.view);
            config.data.view="CONVERT";
        }),
        SETTINGclick:document.getElementById('SETTING_menubtn').addEventListener('click',function(){
            console.log('SETTING menu button clicked');
            UI.navigate.SETTING();
            UI.navigate.index.push(config.data.view);
            config.data.view="SETTING";
        }),
        ABOUTclick:document.getElementById('ABOUT_menubtn').addEventListener('click',function(){
            console.log('ABOUT menu button clicked');
            UI.navigate.ABOUT();
            UI.navigate.index.push(config.data.view);
            config.data.view="ABOUT";
        }),
        EXIT_menubtn:document.getElementById('EXIT_menubtn').addEventListener('click',function(){
            config.save();
            console.log('Exit menu button pressed');
            if (navigator.app) {navigator.app.exitApp()}
            else if (navigator.device) {navigator.device.exitApp()}
            else {window.close()}
        }),
    },
    navigate:{/*    Navigation controls */
        index:[],
        backtimeout:false,
        back:function(){
            console.log('Backbutton navigation triggered');
            var last_page = this.index.pop();
            if(last_page==config.data.view){
                this.back();
            }else if(last_page=="RGB"){
                this.RGB();
                console.log('Back button navigation to "RGB view"');
            }else if(last_page=="HSL"){
                this.HSL();
                console.log('Back button navigation to "HSL view"');
            }else if(last_page=="HEX"){
                this.HEX();
                console.log('Back button navigation to "HEX view"');
            }else if(last_page=="CONVERT"){
                this.CONVERT();
                console.log('Back button navigation to "CONVERT view"');
            }else if(last_page=="SETTING"){
                this.SETTING();
                console.log('Back button navigation to "SETTING view"');
            }else if(last_page=="ABOUT"){
                this.ABOUT();
                console.log('Back button navigation to "ABOUT view"');
            }else {
                if(UI.navigate.backtimeout){
                    if (navigator.app) {
                        navigator.app.exitApp();
                    } else if (navigator.device) {
                        navigator.device.exitApp();
                    } else {
                        window.close();
                    }
                }else{
                    console.log('navigation index empty, app exit timeout');
                    UI.navigate.backtimeout=true;
                    config.save();
                    notify.new('Exit','Press back button again to exit');
                    setTimeout(()=>{UI.navigate.backtimeout=false},10000);//reset the timeout
                }
            }
        },
        startup:function(){//checks config file for last used "view and navigates to it"
            console.log('Initial startup navigation');
            if(config.data.view=="RGB"){
                this.RGB();
                console.log('Startup navigation to "RGB view"');
            }else if(config.data.view=="HSL"){
                this.HSL();
                console.log('Startup navigation to "HSL view"');
            }else if(config.data.view=="HEX"){
                this.HEX();
                console.log('Startup navigation to "HEX view"');
            }else if(config.data.view=="CONVERT"){
                this.CONVERT();
                console.log('Startup navigation to "CONVERT view"');
            }else if(config.data.view=="SETTING"){
                this.SETTING();
                console.log('Startup navigation to "SETTING view"');
            }else if(config.data.view=="ABOUT"){
                this.ABOUT();
                console.log('Startup navigation to "ABOUT view"');
            }else {
                //trow an error or validate the config and try again
                console.log('Startup navigation failed, view: '+config.data.view+' Config will be validated');
                config.validate();
                this.startup();
            }
        },
        RGB:function(){//navigate to RGB_view
            console.log('Navigating to RGB view');
            //Change view state
            document.getElementById('RGBview').style.display='block';
            document.getElementById('HSL_view').style.display='none';
            document.getElementById('HEX_view').style.display='none';
            document.getElementById('CONVERT_view').style.display='none';
            document.getElementById('settings_view').style.display='none';
            document.getElementById('about_view').style.display='none';
            //change hilighted menu button
            document.getElementById('RGB_menubtn').className='menubtn';
            document.getElementById('HSL_menubtn').className='menubtn_dulled';
            document.getElementById('HEX_menubtn').className='menubtn_dulled';
            document.getElementById('CONVERT_menubtn').className='menubtn_dulled';
            document.getElementById('SETTING_menubtn').className='menubtn_dulled';
            document.getElementById('ABOUT_menubtn').className='menubtn_dulled';
            document.getElementById('headertxt').innerHTML='RGB';
            setTimeout(() => { UI.menu.hide(); }, 200);
            clearInterval(UI.setting_animate.state);
        },
        HSL:function(){//navigate to HSL_view
            console.log('Navigating to HSL view');
            //Change view state
            document.getElementById('RGBview').style.display='none';
            document.getElementById('HSL_view').style.display='block';
            document.getElementById('HEX_view').style.display='none';
            document.getElementById('CONVERT_view').style.display='none';
            document.getElementById('settings_view').style.display='none';
            document.getElementById('about_view').style.display='none';
            //change hilighted menu button
            document.getElementById('RGB_menubtn').className='menubtn_dulled';
            document.getElementById('HSL_menubtn').className='menubtn';
            document.getElementById('HEX_menubtn').className='menubtn_dulled';
            document.getElementById('CONVERT_menubtn').className='menubtn_dulled';
            document.getElementById('SETTING_menubtn').className='menubtn_dulled';
            document.getElementById('ABOUT_menubtn').className='menubtn_dulled';
            document.getElementById('headertxt').innerHTML='HSL';
            setTimeout(() => { UI.menu.hide(); }, 200);
            clearInterval(UI.setting_animate.state);
        },
        HEX:function(){//navigate to HEX_view
            console.log('Navigating to RGB view');
            //Change view state
            document.getElementById('RGBview').style.display='none';
            document.getElementById('HSL_view').style.display='none';
            document.getElementById('HEX_view').style.display='block';
            document.getElementById('CONVERT_view').style.display='none';
            document.getElementById('settings_view').style.display='none';
            document.getElementById('about_view').style.display='none';
            //change hilighted menu button
            document.getElementById('RGB_menubtn').className='menubtn_dulled';
            document.getElementById('HSL_menubtn').className='menubtn_dulled';
            document.getElementById('HEX_menubtn').className='menubtn';
            document.getElementById('CONVERT_menubtn').className='menubtn_dulled';
            document.getElementById('SETTING_menubtn').className='menubtn_dulled';
            document.getElementById('ABOUT_menubtn').className='menubtn_dulled';
            document.getElementById('headertxt').innerHTML='HEX';
            setTimeout(() => { UI.menu.hide(); }, 200);
            clearInterval(UI.setting_animate.state);
        },
        CONVERT:function(){//navigate to CONVERT_view
            console.log('Navigating to RGB view');
            //Change view state
            document.getElementById('RGBview').style.display='none';
            document.getElementById('HSL_view').style.display='none';
            document.getElementById('HEX_view').style.display='none';
            document.getElementById('CONVERT_view').style.display='block';
            document.getElementById('settings_view').style.display='none';
            document.getElementById('about_view').style.display='none';
            //change hilighted menu button
            document.getElementById('RGB_menubtn').className='menubtn_dulled';
            document.getElementById('HSL_menubtn').className='menubtn_dulled';
            document.getElementById('HEX_menubtn').className='menubtn_dulled';
            document.getElementById('CONVERT_menubtn').className='menubtn';
            document.getElementById('SETTING_menubtn').className='menubtn_dulled';
            document.getElementById('ABOUT_menubtn').className='menubtn_dulled';
            document.getElementById('headertxt').innerHTML='Convert';
            setTimeout(() => { UI.menu.hide(); }, 200);
            clearInterval(UI.setting_animate.state);
        },
        SETTING:function(){//navigate to SETTINGS_view
            console.log('Navigating to RGB view');
            //Change view state
            document.getElementById('RGBview').style.display='none';
            document.getElementById('HSL_view').style.display='none';
            document.getElementById('HEX_view').style.display='none';
            document.getElementById('CONVERT_view').style.display='none';
            document.getElementById('settings_view').style.display='block';
            document.getElementById('about_view').style.display='none';
            //change hilighted menu button
            document.getElementById('RGB_menubtn').className='menubtn_dulled';
            document.getElementById('HSL_menubtn').className='menubtn_dulled';
            document.getElementById('HEX_menubtn').className='menubtn_dulled';
            document.getElementById('CONVERT_menubtn').className='menubtn_dulled';
            document.getElementById('SETTING_menubtn').className='menubtn';
            document.getElementById('ABOUT_menubtn').className='menubtn_dulled';
            document.getElementById('headertxt').innerHTML='Settings';
            setTimeout(() => { UI.menu.hide(); }, 200);
            UI.setting_animate.state=setInterval(()=>{UI.setting_animate.tick()},1000);
        },
        ABOUT:function(){//navigate to ABOUT_view
            console.log('Navigating to RGB view');
            //Change view state
            document.getElementById('RGBview').style.display='none';
            document.getElementById('HSL_view').style.display='none';
            document.getElementById('HEX_view').style.display='none';
            document.getElementById('CONVERT_view').style.display='none';
            document.getElementById('settings_view').style.display='none';
            document.getElementById('about_view').style.display='block';
            //change hilighted menu button
            document.getElementById('RGB_menubtn').className='menubtn_dulled';
            document.getElementById('HSL_menubtn').className='menubtn_dulled';
            document.getElementById('HEX_menubtn').className='menubtn_dulled';
            document.getElementById('CONVERT_menubtn').className='menubtn_dulled';
            document.getElementById('SETTING_menubtn').className='menubtn_dulled';
            document.getElementById('ABOUT_menubtn').className='menubtn';
            document.getElementById('headertxt').innerHTML='About';
            setTimeout(() => { UI.menu.hide(); }, 200);
            notify.new('info','You can tap on an item to copy it to your clipboard');
            clearInterval(UI.setting_animate.state);
        },
    },
    pageshade:{
        touch:document.getElementById('pageshade').addEventListener('touchstart',function(){
            console.log('Page shade Touchstart trigger');
            UI.menu.hide();
        }),
        show:function(){
            console.log('Page shade shown');
            setTimeout(()=>{
                document.getElementById('pageshade').style.display='block';
                setTimeout(()=>{document.getElementById('pageshade').style.backgroundColor='rgba(0,0,0,0.5)';},20);
            },300);
        },
        hide:function(){
            console.log('Page shade hidden');
            document.getElementById('pageshade').style.display='none';
            document.getElementById('pageshade').style.backgroundColor='rgba(0,0,0,0)';
        }
    },
    header:{
        color:function(){//changes the instruction btn color
            if(config.data.colorheader){
                var HSL = rand.HSL();
                //instructionbtn_shutter
                document.getElementById('header_shutter').style.backgroundColor='hsl('+ HSL.HUE +', 100% ,'+ HSL.LIGHTENESS +')';
                document.getElementById('header_shutter').className='header_shutter_blown';
                setTimeout(()=>{
                    document.getElementById('header').style.backgroundColor='hsl('+ HSL.HUE +', 100% ,'+ HSL.LIGHTENESS +')';
                    setTimeout(()=>{document.getElementById('header_shutter').className='header_shutter';},100);
                },1600);
                //Checks the lightness of the new color and sets the text color accordingly
                if(Number(HSL.LIGHTENESS.slice(0,-1))<50){
                    //background color is dark
                    document.getElementById('menubtn').style.backgroundImage='url("img/menubn-light.webp")';
                    document.getElementById('menubtn').style.borderColor='white';
                    document.getElementById('header').style.boxShadow='#ffffff';
                    document.getElementById('header').style.color='#ffffff';
                    document.getElementById('header').style.borderColor='#ffffff';
                }
                else{
                    //background color is light
                    document.getElementById('menubtn').style.backgroundImage='url("img/menubn-dark.webp")';
                    document.getElementById('menubtn').style.borderColor='black';
                    document.getElementById('header').style.boxShadow='#000000';
                    document.getElementById('header').style.color='#000000';
                    document.getElementById('header').style.borderColor='#000000';
                }
            }else{document.getElementById('header').style='';document.getElementById('menubtn').style='';document.getElementById('header_shutter').style='';}
        },
    },
    Convert_submenu:{
        RGBbtn:document.getElementById('RGBbtn').addEventListener('click',function(){
            console.log('RGB convert pannel selected by user');
            config.data.convertview="RGB";
            UI.Convert_submenu.navigate();
            config.save();
        }),
        HSLbtn:document.getElementById('HSLbtn').addEventListener('click',function(){
            console.log('HSL convert pannel selected by user');
            config.data.convertview="HSL";
            UI.Convert_submenu.navigate();
            config.save();
        }),
        HEXbtn:document.getElementById('HEXbtn').addEventListener('click',function(){
            console.log('HEX convert pannel selected by user');
            config.data.convertview="HEX";
            UI.Convert_submenu.navigate();
            config.save();
        }),
        navigate:function(){
            console.log('Sub view naviation initiated');
            if(config.data.convertview=="RGB"){//navigate to RGB nannel
                //change the buttons colors
                document.getElementById('RGBbtn').className='subpannelbtn';
                document.getElementById('HSLbtn').className='subpannelbtn_dead';
                document.getElementById('HEXbtn').className='subpannelbtn_dead';
                //change to the appropriate subview
                document.getElementById('RGB_conversion_subview').style.transform='translate(0vw,0vh)';
                document.getElementById('HSL_conversion_subview').style.transform='translate(100vw,0vh)';
                document.getElementById('HEX_conversion_subview').style.transform='translate(200vw,0vh)';
            }else if(config.data.convertview=="HSL"){//naviagte to hsl pannel
                //change the buttons colors
                document.getElementById('RGBbtn').className='subpannelbtn_dead';
                document.getElementById('HSLbtn').className='subpannelbtn';
                document.getElementById('HEXbtn').className='subpannelbtn_dead';
                //change to the appropriate subview
                document.getElementById('RGB_conversion_subview').style.transform='translate(-100vw,0vh)';
                document.getElementById('HSL_conversion_subview').style.transform='translate(0vw,0vh)';
                document.getElementById('HEX_conversion_subview').style.transform='translate(100vw,0vh)';
            }else if(config.data.convertview=="HEX"){
                //change the buttons colors
                document.getElementById('RGBbtn').className='subpannelbtn_dead';
                document.getElementById('HSLbtn').className='subpannelbtn_dead';
                document.getElementById('HEXbtn').className='subpannelbtn';
                //change to the appropriate subview
                document.getElementById('RGB_conversion_subview').style.transform='translate(-200vw,0vh)';
                document.getElementById('HSL_conversion_subview').style.transform='translate(-100vw,0vh)';
                document.getElementById('HEX_conversion_subview').style.transform='translate(0vw,0vh)';
            }else{config.validate();console.warn('Sub menu navigation failed!!');}
        }
    },
    setting_animate:{
        state:setInterval(()=>{UI.setting_animate.tick()},1000),
        rotate:0,
        tick:function(){
            this.rotate=this.rotate+15;
            document.getElementById('tick_gear').style.transform = 'rotate('+this.rotate+'deg)';
        },
    }
}

    /*Random color generator*/
let rand={
    HEX:function(){// I recomend using Random HEX values, as there is only one value to work with, but it is harder to control the outcome
        var randhex ='#'+Math.floor(Math.random()*16777215).toString(16);
        console.log('Random color generated :',randhex);
        return randhex;
    },
    RGB:function(){//RGB colors returned in an object
        //Because of the was pseudo random numbers and RGB work, darker colors will be produced more often
        var RGB_obj = { RED:this.number(255,0), GREEN:this.number(255,0), BLUE:this.number(255,0) }   
        console.log('RGB index generated: rgb('+ RGB_obj.RED +','+ RGB_obj.GREEN +','+ RGB_obj.BLUE +')');
        return RGB_obj;
    },
    HSL:function(){//HSL colors returned in an object
        //Because of the was pseudo random numbers and HSL colors work, darker colors will be produced more often
        var HSL_obj = { HUE:this.number(360,0), SATURATION:this.number(100,0)+'%', LIGHTENESS:this.number(100,1)+'%', }
        console.log('HSL index generated: hsl('+ HSL_obj.HUE +','+ HSL_obj.SATURATION +','+ HSL_obj.LIGHTENESS +')');
        return HSL_obj;
    },
    number(max,min){
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}

    /*Notification handler  */
var notify = {
    preset_height:22,//2 more than the height in the css
    animate_old:true,//turn on and off notification manuvering
    current:0,
    previous_type:1,
    history:[],
    resizecheck:window.addEventListener('resize',()=>{notify.clearall()}),
    new:function(title,body){
        this.current++;//keep track of current notification
        //create the notification
        var tempnotif = document.createElement("div");
        document.body.appendChild(tempnotif);
        tempnotif.setAttribute("id", "notif"+this.current);
        tempnotif.setAttribute("class", "notification_style3"); 
        //create the title
        var tmptitle = document.createElement("div");
        tmptitle.setAttribute("class","title");
        tmptitle.setAttribute("id","title"+this.current);
        document.getElementById("notif"+this.current).appendChild(tmptitle);
        document.getElementById("title"+this.current).innerHTML=title;
        //create the body
        var tmpbdy = document.createElement("div");
        tmpbdy.setAttribute("class","notifbody");
        tmpbdy.setAttribute("id","body"+this.current);
        document.getElementById("notif"+this.current).appendChild(tmpbdy);
        document.getElementById("body"+this.current).innerHTML=body;
        
        tempnotif.addEventListener('click',function(){notify.clearall()});
        
        this.timing_effects(this.current,tempnotif);//Timing in seperate function to avoid using 'new' object calls or extra variables
        console.table(notify);
        
        //manuver old notifications out of the way
        if(window.innerHeight>=window.innerWidth &&this.animate_old){
            if(document.getElementById('notif'+Number(this.current-1))){//stars at -1 because 1 less than the latest notification
                document.getElementById('notif'+Number(this.current-1)).style.transform='translate(-100vw,0vh)';
                if(config.data.colorheader){
                    var HSL_obj = rand.HSL();
                    document.getElementById('notif'+Number(this.current-1)).style.backgroundColor='hsl('+ HSL_obj.HUE +', 100% ,'+ HSL_obj.LIGHTENESS +')';
                    if(Number(HSL_obj.LIGHTENESS.slice(0,-1))>50){
                        //color is light
                        document.getElementById('notif'+Number(this.current-1)).style.color='black';
                    }else{
                        //color is dark
                        document.getElementById('notif'+Number(this.current-1)).style.color='white';
                    }
                }
            }
            if(document.getElementById('notif'+Number(this.current-2))){
                document.getElementById('notif'+Number(this.current-2)).style.transform='translate(-100vw,0vh)';
                if(config.data.colorheader){document.getElementById('notif'+Number(this.current-2)).style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16);}
            }
            if(document.getElementById('notif'+Number(this.current-3))){
                document.getElementById('notif'+Number(this.current-3)).style.transform='translate(-100vw,0vh)';
                if(config.data.colorheader){document.getElementById('notif'+Number(this.current-3)).style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16);}
            }
            if(document.getElementById('notif'+Number(this.current-4))){
                document.getElementById('notif'+Number(this.current-4)).style.transform='translate(-100vw,0vh)';
                if(config.data.colorheader){document.getElementById('notif'+Number(this.current-4)).style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16);}
            }
            if(document.getElementById('notif'+Number(this.current-5))){
                document.getElementById('notif'+Number(this.current-5)).style.transform='translate(-100vw,0vh)';
                if(config.data.colorheader){document.getElementById('notif'+Number(this.current-5)).style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16);}
            }
            if(document.getElementById('notif'+Number(this.current-6))){
                document.getElementById('notif'+Number(this.current-6)).style.transform='translate(-100vw,0vh)';
                if(config.data.colorheader){document.getElementById('notif'+Number(this.current-6)).style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16);}
            }
            if(document.getElementById('notif'+Number(this.current-7))){
                document.getElementById('notif'+Number(this.current-7)).style.transform='translate(-100vw,0vh)';
                if(config.data.colorheader){document.getElementById('notif'+Number(this.current-7)).style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16);}
            }
        }
        else{
            if(document.getElementById('notif'+Number(this.current-1))){//stars at -1 because 1 less than the latest notification
                document.getElementById('notif'+Number(this.current-1)).style.transform='translate(0vw,-'+this.preset_height+'vh)';
                if(config.data.colorheader){
                    var HSL_obj = rand.HSL();
                    document.getElementById('notif'+Number(this.current-1)).style.backgroundColor='hsl('+ HSL_obj.HUE +', 100% ,'+ HSL_obj.LIGHTENESS +')';
                    if(Number(HSL_obj.LIGHTENESS.slice(0,-1))>50){
                        //color is light
                        document.getElementById('notif'+Number(this.current-1)).style.color='black';
                    }else{
                        //color is dark
                        document.getElementById('notif'+Number(this.current-1)).style.color='white';
                    }
                }
            }
            if(document.getElementById('notif'+Number(this.current-2))){
                document.getElementById('notif'+Number(this.current-2)).style.transform='translate(0vw,-'+this.preset_height*2+'vh)';
                if(config.data.colorheader){
                    var HSL_obj = rand.HSL();
                    document.getElementById('notif'+Number(this.current-2)).style.backgroundColor='hsl('+ HSL_obj.HUE +', 100% ,'+ HSL_obj.LIGHTENESS +')';
                    if(Number(HSL_obj.LIGHTENESS.slice(0,-1))>50){
                        //color is light
                        document.getElementById('notif'+Number(this.current-2)).style.color='black';
                    }else{
                        //color is dark
                        document.getElementById('notif'+Number(this.current-2)).style.color='white';
                    }
                }
            }
            if(document.getElementById('notif'+Number(this.current-3))){
                document.getElementById('notif'+Number(this.current-3)).style.transform='translate(0vw,-'+this.preset_height*3+'vh)';
                if(config.data.colorheader){
                    var HSL_obj = rand.HSL();
                    document.getElementById('notif'+Number(this.current-3)).style.backgroundColor='hsl('+ HSL_obj.HUE +', 100% ,'+ HSL_obj.LIGHTENESS +')';
                    if(Number(HSL_obj.LIGHTENESS.slice(0,-1))>50){
                        //color is light
                        document.getElementById('notif'+Number(this.current-3)).style.color='black';
                    }else{
                        //color is dark
                        document.getElementById('notif'+Number(this.current-3)).style.color='white';
                    }
                }
            }
            if(document.getElementById('notif'+Number(this.current-4))){
                document.getElementById('notif'+Number(this.current-4)).style.transform='translate(0vw,-'+this.preset_height*4+'vh)';
                if(config.data.colorheader){
                    var HSL_obj = rand.HSL();
                    document.getElementById('notif'+Number(this.current-4)).style.backgroundColor='hsl('+ HSL_obj.HUE +', 100% ,'+ HSL_obj.LIGHTENESS +')';
                    if(Number(HSL_obj.LIGHTENESS.slice(0,-1))>50){
                        //color is light
                        document.getElementById('notif'+Number(this.current-4)).style.color='black';
                    }else{
                        //color is dark
                        document.getElementById('notif'+Number(this.current-4)).style.color='white';
                    }
                }
            }
            if(document.getElementById('notif'+Number(this.current-5))){
                document.getElementById('notif'+Number(this.current-5)).style.transform='translate(0vw,-'+this.preset_height*5+'vh)';
                if(config.data.colorheader){
                    var HSL_obj = rand.HSL();
                    document.getElementById('notif'+Number(this.current-5)).style.backgroundColor='hsl('+ HSL_obj.HUE +', 100% ,'+ HSL_obj.LIGHTENESS +')';
                    if(Number(HSL_obj.LIGHTENESS.slice(0,-1))>50){
                        //color is light
                        document.getElementById('notif'+Number(this.current-5)).style.color='black';
                    }else{
                        //color is dark
                        document.getElementById('notif'+Number(this.current-5)).style.color='white';
                    }
                }
            }
            if(document.getElementById('notif'+Number(this.current-6))){
                document.getElementById('notif'+Number(this.current-6)).style.transform='translate(0vw,-'+this.preset_height*6+'vh)';
                if(config.data.colorheader){
                    var HSL_obj = rand.HSL();
                    document.getElementById('notif'+Number(this.current-6)).style.backgroundColor='hsl('+ HSL_obj.HUE +', 100% ,'+ HSL_obj.LIGHTENESS +')';
                    if(Number(HSL_obj.LIGHTENESS.slice(0,-1))>50){
                        //color is light
                        document.getElementById('notif'+Number(this.current-6)).style.color='black';
                    }else{
                        //color is dark
                        document.getElementById('notif'+Number(this.current-6)).style.color='white';
                    }
                }
            }
            if(document.getElementById('notif'+Number(this.current-7))){
                document.getElementById('notif'+Number(this.current-7)).style.transform='translate(0vw,-'+this.preset_height*7+'vh)';
                if(config.data.colorheader){
                    var HSL_obj = rand.HSL();
                    document.getElementById('notif'+Number(this.current-7)).style.backgroundColor='hsl('+ HSL_obj.HUE +', 100% ,'+ HSL_obj.LIGHTENESS +')';
                    if(Number(HSL_obj.LIGHTENESS.slice(0,-1))>50){
                        //color is light
                        document.getElementById('notif'+Number(this.current-7)).style.color='black';
                    }else{
                        //color is dark
                        document.getElementById('notif'+Number(this.current-7)).style.color='white';
                    }
                }
            }
        }

    },
    timing_effects:function(notificationindex,tempnotif){
        setTimeout(()=>{document.getElementById('notif'+notificationindex).style.transform='translate(0vw,0vh)'},50);
        setTimeout(()=>{document.getElementById('notif'+notificationindex).style.opacity='0.0'},10000);
        setTimeout(()=>{document.body.removeChild(tempnotif);},11000);
    },
    clearall:function(){
        UI.navigate.backtimeout=false;
        if(document.getElementById('notif'+Number(this.current))){//stars at -1 because 1 less than the latest notification
            document.getElementById('notif'+Number(this.current)).style.opacity='0.0';
            document.getElementById('notif'+Number(this.current)).style.zIndex='-999';
        }
        if(document.getElementById('notif'+Number(this.current-1))){//stars at -1 because 1 less than the latest notification
            document.getElementById('notif'+Number(this.current-1)).style.opacity='0.0';
            document.getElementById('notif'+Number(this.current-1)).style.zIndex='-999';
        }
        if(document.getElementById('notif'+Number(this.current-2))){
            document.getElementById('notif'+Number(this.current-2)).style.opacity='0.0';
            document.getElementById('notif'+Number(this.current-2)).style.zIndex='-999';
        }
        if(document.getElementById('notif'+Number(this.current-3))){
            document.getElementById('notif'+Number(this.current-3)).style.opacity='0.0';
            document.getElementById('notif'+Number(this.current-3)).style.zIndex='-999';
        }
        if(document.getElementById('notif'+Number(this.current-4))){
            document.getElementById('notif'+Number(this.current-4)).style.opacity='0.0';
            document.getElementById('notif'+Number(this.current-4)).style.zIndex='-999';
        }
        if(document.getElementById('notif'+Number(this.current-5))){
            document.getElementById('notif'+Number(this.current-5)).style.opacity='0.0';
            document.getElementById('notif'+Number(this.current-5)).style.zIndex='-999';
        }
        if(document.getElementById('notif'+Number(this.current-6))){
            document.getElementById('notif'+Number(this.current-6)).style.opacity='0.0';
            document.getElementById('notif'+Number(this.current-6)).style.zIndex='-999';
        }
        if(document.getElementById('notif'+Number(this.current-7))){
            document.getElementById('notif'+Number(this.current-7)).style.opacity='0.0';
            document.getElementById('notif'+Number(this.current-7)).style.zIndex='-999';
        }
    }
}