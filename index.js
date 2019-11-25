window.onload=init();
function init()
{
  var tur = new turtle();
  var i;
  for(i=0 ; i<=10 ; i++)
  {
    if(i%3 == 0 || i==0)
    {
      tur.forward(3*50);
      tur.turnTo(90);  
    }
    else
    {
      tur.forward(50);
      tur.turnTo(90);
    }
  }
  tur.forward(50);
}