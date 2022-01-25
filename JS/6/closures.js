var a = 100;

function mainParent(){
    function outerZone(c)
    {
        let b = 20;            // let is block-scope. It is declared outside of the scope...
        function innerZone()
        {
            console.log(a, b, c);
        }
        return innerZone;
    }
    return outerZone;
}

// var Myname = mainParent()('hari')();
// Myname();
mainParent()('hari')();   // () => mainParent(), ('hari')=> outerZone(c), ()=> innerZone();