//fungsi hitung ke text view
function insert(num){
    document.form.textarea.value = document.form.textarea.value + num;
}
//fungsi hitung
function equal(){
    var hasil = document.form.textarea.value;
    document.form.textarea.value = eval(hasil);
}
//clean
function clean(){
    document.form.textarea.value = "";
}
//delete
function back(){
    var hasil = document.form.textarea.value;
    document.form.textarea.value = hasil.substring(0,hasil.lenght-1);
}