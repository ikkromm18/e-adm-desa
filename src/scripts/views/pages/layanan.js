

const Layanan = {
  async render() {
    return `
         <!-- Layanan -->
   <div class="layanan">
    <div class="layanan__container">
      <div class="form-header">Form Pengajuan Surat</div>
      <form class="form-grid">
        <!-- Input NIK -->
        <input class="nik" type="text" placeholder="Masukkan NIK">
        <!-- Input Nama -->
        <input class="nama" type="text" placeholder="Nama Lengkap">
        <!-- Input Alamat -->
        <select class="alamat">
          <option value="">Pilih Gang</option>
          <option value="gang1">Gang 1</option>
          <option value="gang2">Gang 2</option>
        </select>
        <!-- Dropdown RT dan RW -->
        <div class="rt-rw">
          <select>
            <option value="">Pilih RT</option>
            <option value="rt1">RT 1</option>
            <option value="rt2">RT 2</option>
          </select>
          <select>
            <option value="">Pilih RW</option>
            <option value="rw1">RW 1</option>
            <option value="rw2">RW 2</option>
          </select>
        </div>
        <!-- Input Email -->
        <input class="email" type="email" placeholder="example@gmail.com">
        <!-- Input Nomor HP -->
        <input class="hp" type="tel" placeholder="0821xxxx">
        <!-- Dropdown Jenis Surat -->
        <select class="jenis">
          <option value="">Pilih Jenis Surat</option>
          <option value="skck">SKCK</option>
          <option value="akta">Akta Kelahiran</option>
        </select>
        <!-- Input Lorem Ipsum -->
        <input class="lorem1" type="text" placeholder="Lorem Ipsum">
        <input class="lorem2" type="text" placeholder="Lorem Ipsum">
        <input class="lorem3" type="text" placeholder="Lorem Ipsum">
        <input class="lorem4" type="text" placeholder="Lorem Ipsum">
        <!-- Button Ajukan -->
        <button class="button" type="submit">Ajukan</button>
      </form>
    </div>
   </div>
      `;
  },

  async afterRender() {

  },
};

export default Layanan;