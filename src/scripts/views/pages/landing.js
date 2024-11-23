// import TheMovieDbSource from '../../data/themoviedb-source';

const Landing = {
  async render() {
    return `
       <div class="hero">
    <div class="hero__elemen">  
      <h2>Urus Keadministrasian</h2>
      <h2>Menjadi Lebih Mudah</h2>
      <a href="#/layanan" class="btn__ajukan">Ajukan</a>
    </div>
  </div>

  <!-- Manfaat -->
  <div class="manfaat">
    <h2>Manfaat</h2>
    <div class="manfaat__poin">
      <div class="card">
        
      </div>
      <div class="card">.</div>
      <div class="card">.</div>
    </div>
  </div>

  <!-- Sambutan Kepala Desa -->
  <div class="sambutan">
    <div class="sambutan__konten">

      <div class="isi">
        <div class="sambutan__judul">Selamat Datang di Website</div>
        <div class="sambutan__judul">Pelayanan Administrasi Online</div>
        <div class="sambutan__isi">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim culpa laudantium ab delectus doloremque ea earum exercitationem, quisquam voluptas quis, nemo molestiae! Accusamus, quibusdam illum voluptatibus, iure beatae obcaecati consectetur laboriosam ipsum quasi maxime reiciendis qui in quidem sed ratione vero cupiditate inventore? Perspiciatis consequatur incidunt ullam dolore. Porro obcaecati fugiat unde ratione, fuga veritatis, quis atque inventore iste perspiciatis nostrum temporibus modi molestias ea cum odit minus tenetur ducimus quasi ex dicta totam aut consequuntur. Aliquid consequatur officiis id quisquam itaque aut voluptas eum odit esse recusandae, accusamus ipsum et, numquam vel aliquam aperiam magnam, tempore animi minima?</div>
        <div class="sambutan__nama"><span class="bold">Bayu Sukmono,</span> Kepala Desa</div>
      </div>


      <div class="foto">
        <div class="foto__container">
          <img src="./prabowo.jpeg" alt="">
        </div>
      </div>
    </div>
  </div>
      `;
  },

  async afterRender() {

  },
};

export default Landing;