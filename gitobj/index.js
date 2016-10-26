var express=require('express');
var app=express();
var path=require('path');
var favicon=require('serve-favicon');
app.set('port',process.env.PORT||3006);

//静态文件地址
app.use(express.static(__dirname+'/public'));
app.use(favicon(path.join(__dirname,'public','favicon.ico')));

app.get('/',function (req,res) {
    res.type('text/html');
    res.send('<span style="color: green">Welcome to My Site.</span>');
});

app.get('/js',function (req,res) {
    if (res.query){
        res.write("刷新后的页面"+Math.random());
        res.end();
    }
    else {
        res.send("刷新后的页面");
        res.end();
    }
})

//定制404页面
app.use(function (req,res) {
    res.type('text/html');
    res.status(404);
    res.send('<span style="color: red">404-No Found</span>');
});
//定制500页面
app.use(function (req,res) {
    console.error(err.stack);
    res.type('type/plian');
    res.status(500);
    res.send('500-Server Error');
});

app.listen(app.get('port'),function () {
    console.log('Express started on http://localhost:'+app.get('port')+';press Ctrl-C to terminnate.');
});