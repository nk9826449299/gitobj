module.exports=function(grunt){
//
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        //检查Style css语法
        csslint:{
            src:['public/stylesheets/*.css']
        },
        //合并CSS文件
        concat:{
            css:{
                src:['public/stylesheets/*.css'],
                /*根据mulxia文件情况配置*/
                dest:'public/stylesheets/<%=pkg.name%>.css'
            }
        },
        //压缩Style css文件为 .min.css
        cssmin:{
            options:{
                //移除css文件中的所有注释
                keepSpecialComments:0
            },
            minify:{
                expand:true,
                cwd:'public/stylesheets/',
                src:['<%=pkg.name%>.css'],
                dest:'public/stylesheets/',
                ext:'.min.css'
            }
        }
    });
    //加载插件
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //默认任务
    grunt.registereTask('default',['csslint','concat','cssmin']);
};




