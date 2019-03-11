module.exports = function check(str, bracketsConfig) {
      let k=0;
      let mas=bracketsConfig;
      mas=mas.map(function(item,i){
      let l=item[0]+item[1];
      //alert(l)
      return l
      });
       
      if(str.length%2!==0){
            return false;
            } 
      if (str.length==0)
            {
            return true;
            } 
                                       function isHave(str,mas){
                                          let q=0;
                                          for(let i=0;i<mas.length;i++){
                                            if(str.indexOf(mas[i])!==-1){
                                            q=q+1;
                                            }
                                         }
                                         if (q==0){return false}return true
                                         };
                                      // alert(isHave(str,mas))
      if(isHave(str,mas)==false){
            return false;}
       
                                      function del(str,ab){
                                        str=str.replace(ab,"");
                                        return str;
                                      }
                    
            while(str.length>=0){
            if (str.length==0)
                      {
                      return true;
                      }            
                else{ 
                    let a = bracketsConfig[k][0];
                    a.toString();
                    let b = bracketsConfig[k][1];
                    b.toString();
                    let ab=a+b;
                   // alert(str)
                    
                    if (a!==b&&str[0]==b||str[str.length]==a){
                      return false
                      }
                   
                       while(str.indexOf(ab)>=0&&str.length!==0){
                          str=del(str,ab);                    
                          }
                    // alert(isHave(str,mas))
                      if (str.length==0)
                          {
                          return true;
                          } 
                          if(str.length!==0&&isHave(str,mas)==false){
                            return false;
                            }
                             k++;
                            if(k === bracketsConfig.length){
                                  k = 0;
                       //alert(str)
                      }
                    }//else 
            
           } return true//while
}
