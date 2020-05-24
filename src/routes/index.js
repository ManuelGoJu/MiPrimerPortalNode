const  express  =  require ( 'express' ) ;
const  router  =  express . Enrutador ( ) ;

enrutador . get ( '/' ,  ( req ,  res )  =>  {
  res . render ( 'index' ,  {  title : 'First Web Node'  } ) ;
} ) ;

enrutador . get ( '/ contact' ,  ( req ,  res )  =>  {
  res . render ( 'contacto' ,  {  título : 'Página de contacto'  } ) ;
} ) ;

módulo . exportaciones  =  enrutador ;
