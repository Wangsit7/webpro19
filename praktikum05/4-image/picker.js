function hewan(){
    let kotak = document.getElementById('gambar');
    let animal = document.getElementById('animal');
  
    if(!animal.value == ' '){
      kotak.innerHTML = `<img src = "${animal.value}.jpg"></img>`
        alert(`Ini Gambar ${animal.value}`)
    }
    return false;
}