import React from 'react';

export default function footer() {
  return (
    <footer>
      <div className="container-fluid footer-top">
        <div className="row p-4">
          <div className="col-md-4 mb-4 mt-3">
            <h5>
              TENTANG
              <strong style={{ color: '#ffd22e' }}> WEBSITE SANGKAKALA</strong>
            </h5>
            <hr />
            <div className="text-center">
              <img src="/images/logo-jbg.png" width="70" />
            </div>
            <p className="text-justify mt-3">
              Website Sangkakala merupakan website berisikan sholawat dan
              kerontang.
            </p>
          </div>
          <div className="col-md-4 mb-4 mt-3">
            <h5>
              DOWNLOAD <strong style={{ color: '#ffd22e' }}> APLIKASI</strong>
            </h5>
            <hr />
            <div className="text-left">
              {/* <a
                href="https://play.google.com/store/apps/details?id=com.androiddesa"
                target="_blank"
              > */}
              <a href="https://play.google.com/store/apps" target="_blank">
                <img
                  src="/images/playstore.png"
                  width={'180'}
                  className="text-center align-items-center"
                />
              </a>
            </div>
            <p className="text-justify mt-2 text-left">
              Dapatkan info update Sangkakala lebih cepat melalui aplikasi
              Android. Silahkan unduh melalui PlayStore.
            </p>
          </div>
          <div className="col-md-4 mb-4 mt-3">
            <h5>
              KONTAK <strong style={{ color: '#ffd22e' }}>SANGKAKALA</strong>
            </h5>
            <hr />
            <p>
              <i className="fa fa-map-marker"></i> Jl. Swadaya, Bojonggede,
              Kecamatan Bojonggede, Kabupaten Bogor, Jawa Barat 16922
              <br />
              <br />
              <i className="fas fa-envelope"></i> sangkakala@gmail.com
              <br />
              <br />
              <i className="fas fa-phone"></i> +62 855-169-7171
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid footer-bottom">
        <div className="row p-3">
          <div className="text-center text-white font-weight-bold">
            Copyright © 2023 SANGKAKALA. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
