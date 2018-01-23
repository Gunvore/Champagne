export class Utils {
    static doSomething(val: string) { return val; }
    static doSomethingElse(val: string) { return val; }
    
    static readablenumber(val:number) { 
        let readablenum = "0";
        
        if(val>1000000000){
            readablenum = Math.round(val/10000000)/100 + " B";
        }else if(val>1000000){
            readablenum = Math.round(val/10000)/100 + " M";
        }else if(val>1000){
            readablenum = Math.round(val/10)/100 + " K";
        }else{
            readablenum = String(val);   
        }
        return readablenum; 
    }
    
    static calculprod(k:number,l:number,t:number) { 
        let prod = 0;
        prod= k*l*(1+Math.log(t)/100);
        return prod; 
    }
}