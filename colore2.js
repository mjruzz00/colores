function ejecutar(c_fondo){
    c_fondo=document.f_colores.c_fondo.value;
    c_texto=document.f_colores.c_texto.value;
    document.f_colores.res.style.background=c_fondo;
    document.f_colores.res.style.color=c_texto;
    if (c_fondo==1) {
	r=document.f_colores.res.style.background="#F15E57"
    }
    if (c_fondo==2) {
	r=document.f_colores.res.style.background="#F1E357"
    }
    if (c_fondo==3) {
	r=document.f_colores.res.style.background="#6AF157"
	}
	if (c_fondo==4) {
	r=document.f_colores.res.style.background="#9596E7"
	}
	if (c_fondo==5) {
	r=document.f_colores.res.style.background="#B957F1"
	}
	if (c_texto==1) {
	r=document.f_colores.res.style.color="black"
	}
	if (c_texto==2) {
	r=document.f_colores.res.style.color="white"
	}
	if (c_texto==3) {
	r=document.f_colores.res.style.color="gray"
	}
	if (c_texto==4) {
	r=document.f_colores.res.style.color="#804000"
	}
	if (c_texto==5) {
	r=document.f_colores.res.style.color="#56070C"
	}
}