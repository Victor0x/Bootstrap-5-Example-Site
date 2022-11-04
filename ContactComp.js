import React from 'react'

const ContactComp = () => {
  const [formStatus, setFormStatus] = React.useState('Send');
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Terkirim');
    const { nama, email, deskripsi } = e.target.elements;
    let conFom = {
      nama: nama.value,
      email: email.value,
      deskripsi: deskripsi.value,
    };
    //tampilkan inputan pada console.log
    console.log(conFom);
    //tampilkan  dengan alert
    alert(`Halo ${conFom.nama}, dengan email ${conFom.email} pesan mu telah tekirim!!`);
    
  };
  return (
    <div className="container mt-2 mb-5">
      <h2 className="mb-3">Contact Us!</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="nama">
            Nama
          </label>
          <input className="form-control" type="text" id="nama" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="deskripsi">
            Deskripsi
          </label>
          <textarea className="form-control" id="deskripsi" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactComp;