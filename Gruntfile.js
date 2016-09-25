module.exports = function(grunt) {

  grunt.initConfig({
	  
	pkg:grunt.file.readJSON('package.json'),
	  
	jshint: {
		
		
		foo: {
			src:['D:/grunt/src/file1s.js','D:/grunt/src/file2s.js','Gruntfile.js'],
			filter:'isFile'
			
							
		}
			
	},
	
	
	concat: {
		compact: {
	      expand:true,
		  cwd:'./compact/css/src/',
		  ext:'js', 
		  src:'fi*.css', 
		  dest:'./compact/css/dest/',
		  extDot: 'first',   
		  rename: function (dest,src) {	  
			return ;
		  }
		  
	    
			
		},
		
		filesObject: {
		  files:{
			'./object/css/dest/fileo.css':['./object/css/src/file*.css'], 
		  }
		
		},
		filesArray: {
			files:[
			  {
				src:'./array/css/src/fi*.css',
				dest:'./array/css/dest/filea.css'
				
			  }
			]
			
			
			
		}
			  		
		
    }
			
		
	
  });

  

 

    grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	  
	grunt.registerTask('go',['concat']); 
	
};
	

  