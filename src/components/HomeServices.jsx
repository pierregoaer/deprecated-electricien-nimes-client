import React from 'react';
import {Link} from 'react-router-dom';

export default function HomeServices() {
    return (
        <section className="home-services-container">
            <div className="section-inner secondary-section-padding home-services-main">
                <div className="home-services-text">
                    <h2>Nos Services</h2>
                    <p>Intervention chez professionnels et particuliers dans la région de Nîmes, notre équipe d'experts
                        en électricité est là pour répondre au mieux à vos besoins.</p>
                </div>
                <div className="home-services-grid">
                    <div className="home-services-service">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px"
                             viewBox="0 0 1024 1024">
                            <path
                                d="M829.44 911.36c45.245 0 81.92-36.675 81.92-81.92V194.56c0-45.245-36.675-81.92-81.92-81.92H194.56c-45.245 0-81.92 36.675-81.92 81.92v634.88c0 45.245 36.675 81.92 81.92 81.92h634.88zm0 40.96H194.56c-67.866 0-122.88-55.014-122.88-122.88V194.56c0-67.866 55.014-122.88 122.88-122.88h634.88c67.866 0 122.88 55.014 122.88 122.88v634.88c0 67.866-55.014 122.88-122.88 122.88z"/>
                            <path
                                d="M727.746 234.526l-.358.247c.12-.078.239-.16.358-.247zm-304.56 198.992l53.506 34.806c9.143 5.947 12.02 18.016 6.545 27.449L322.853 772.067l277.96-181.589-53.507-34.807c-9.143-5.947-12.02-18.016-6.545-27.449l160.378-276.284-277.953 181.579zm-48.67 17.204c-12.402-8.068-12.42-26.221-.033-34.313L704.13 201.06c29.158-20.549 66.411 12.954 48.276 44.151l-166.448 286.74 63.524 41.323c12.402 8.068 12.42 26.221.034 34.313L319.883 822.934c-29.153 20.564-66.398-12.925-48.29-44.148l166.448-286.74-63.524-41.323z"/>
                        </svg>
                        <h4>Installation</h4>
                        <p>Nous prenons en charge l'installation électrique de votre habitation ou de vos locaux professionnels, qu'il s'agisse d'une construction neuve, d'une rénovation ou d'une extension. Nos électriciens à Nîmes réalisent des installations conformes à la norme NF C 15-100, en tenant compte de vos besoins et de vos contraintes.</p>
                        <Link to={'/services/installation'} className="btn-tertiary">En savoir plus</Link>
                    </div>
                    <div className="home-services-service">
                        <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24">
                            <path
                                d="M18.4721 16.7023C17.3398 18.2608 15.6831 19.3584 13.8064 19.7934C11.9297 20.2284 9.95909 19.9716 8.25656 19.0701C6.55404 18.1687 5.23397 16.6832 4.53889 14.8865C3.84381 13.0898 3.82039 11.1027 4.47295 9.29011C5.12551 7.47756 6.41021 5.96135 8.09103 5.02005C9.77184 4.07875 11.7359 3.77558 13.6223 4.16623C15.5087 4.55689 17.1908 5.61514 18.3596 7.14656C19.5283 8.67797 20.1052 10.5797 19.9842 12.5023M19.9842 12.5023L21.4842 11.0023M19.9842 12.5023L18.4842 11.0023"
                                 strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 8V12L15 15" strokeWidth="1" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                        <h4>Rénovation et mise aux normes</h4>
                        <p>Nous vous accompagnons dans la mise aux normes de votre installation électrique pour assurer la sécurité de votre habitation ou de vos locaux professionnels. Nos électriciens à Nîmes vérifient la conformité de vos équipements et réalisent les travaux nécessaires pour vous garantir une installation sécurisée et performante.</p>
                        <Link to={'/services/renovation-et-mise-aux-normes'} className="btn-tertiary">En savoir plus</Link>
                    </div>
                    <div className="home-services-service">
                        <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 48 48">
                            <path
                                d="M24,46A22,22,0,1,0,2,24,21.9,21.9,0,0,0,24,46ZM24,6A18,18,0,1,1,6,24,18.1,18.1,0,0,1,24,6Z" fill="f4f4f4"/>
                            <path d="M24,28a2,2,0,0,0,2-2V14a2,2,0,0,0-4,0V26A2,2,0,0,0,24,28Z" />
                            <circle cx="24" cy="34" r="2" />
                        </svg>
                        <h4>Dépannage et maintenance</h4>
                        <p>Notre équipe d'électriciens à Nîmes intervient rapidement pour résoudre vos problèmes électriques. Qu'il s'agisse d'une panne de courant, d'un disjoncteur défectueux ou d'un équipement endommagé, nous résoudrons votre problème. Nous assurons également la maintenance préventive de vos installations électriques pour prévenir les pannes et garantir leur bon fonctionnement.</p>
                        <Link to={'/services/depannage-et-maintenance'} className="btn-tertiary">En savoir plus</Link>
                    </div>
                    <div className="home-services-service">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                             height="800px" width="800px" version="1.1" id="_x32_" viewBox="0 0 512 512"
                             xmlSpace="preserve">
                            <path className="st0"
                                  d="M428.215,172.215c0.008-47.522-19.292-90.648-50.445-121.777C346.649,19.293,303.515-0.007,256,0   c-47.514-0.007-90.648,19.293-121.769,50.446c-31.153,31.121-50.454,74.247-50.446,121.769   c-0.008,31.786,8.673,61.634,23.754,87.181h-0.008c0.016,0.032,0.048,0.064,0.064,0.096c0.04,0.064,0.065,0.128,0.104,0.192   l0.016-0.007c10.98,19.436,26.7,34.724,38.945,48.835c6.167,7.056,11.452,13.751,15,20.014c3.572,6.295,5.382,11.908,5.502,17.53   v95.421c0.008,29.44,23.858,53.296,53.305,53.304h7.64C233.312,504.96,243.787,512,256,512c12.213,0,22.688-7.04,27.894-17.218   h7.64c29.447-0.008,53.296-23.865,53.304-53.304v-95.414v-0.008c0.12-5.622,1.93-11.236,5.502-17.53   c5.302-9.419,14.592-19.709,24.762-30.914c10.074-11.179,20.982-23.352,29.191-37.936l0.008,0.007   c0.032-0.048,0.056-0.111,0.088-0.16c0.024-0.048,0.056-0.08,0.08-0.128h-0.008C419.542,233.849,428.223,204.001,428.215,172.215z    M311.828,461.771c-5.23,5.214-12.325,8.401-20.294,8.409h-71.068c-7.969-0.008-15.064-3.195-20.294-8.409   c-5.213-5.23-8.401-12.333-8.409-20.294v-5.326l120.128,25.54C311.868,461.715,311.852,461.747,311.828,461.771z M320.237,441.477   c0,1.754-0.216,3.452-0.513,5.11l-127.96-27.205v-33.524l128.473,27.316V441.477z M320.237,396.397L191.764,369.08V358.1h128.473   V396.397z M383.143,247.142l-0.104,0.169l-0.064,0.112c-8.505,15.408-22.92,29.848-36.159,44.904   c-6.607,7.576-12.918,15.361-17.867,24.034c-3.003,5.286-5.39,11.036-6.935,17.13H189.986c-1.546-6.102-3.932-11.844-6.944-17.13   c-7.432-12.982-17.867-24.081-27.893-35.246c-10.059-11.1-19.733-22.159-26.124-33.692l-0.08-0.128l-0.089-0.152   c-13.005-21.959-20.462-47.514-20.47-74.928c0.008-40.803,16.506-77.626,43.238-104.374C178.374,41.1,215.197,24.61,256,24.602   C296.804,24.61,333.627,41.1,360.375,67.84c26.732,26.748,43.23,63.571,43.238,104.374   C403.605,199.628,396.149,225.183,383.143,247.142z"/>
                        </svg>
                        <h4>Éclairage</h4>
                        <p>Nous vous proposons des solutions d'éclairage innovantes et économiques pour votre intérieur et votre extérieur.</p>
                        <Link to={'/services/eclairage'} className="btn-tertiary">En savoir plus</Link>
                    </div>
                    <div className="home-services-service">
                        <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 16 16">
                            <path
                                d="m 8 1.992188 c -2.617188 0 -5.238281 0.933593 -7.195312 2.808593 l -0.496094 0.480469 c -0.3984378 0.378906 -0.410156 1.011719 -0.03125 1.410156 c 0.382812 0.398438 1.015625 0.410156 1.414062 0.03125 l 0.5 -0.476562 c 3.085938 -2.957032 8.53125 -2.957032 11.617188 0 l 0.5 0.476562 c 0.398437 0.378906 1.03125 0.367188 1.414062 -0.03125 c 0.378906 -0.398437 0.367188 -1.03125 -0.03125 -1.410156 l -0.496094 -0.484375 c -1.957031 -1.871094 -4.578124 -2.804687 -7.195312 -2.804687 z m -0.03125 4.007812 c -1.570312 0.011719 -3.128906 0.628906 -4.207031 1.8125 l -0.5 0.550781 c -0.179688 0.195313 -0.277344 0.453125 -0.261719 0.71875 c 0.011719 0.265625 0.128906 0.515625 0.328125 0.695313 c 0.195313 0.179687 0.453125 0.273437 0.71875 0.257812 c 0.265625 -0.011718 0.515625 -0.128906 0.695313 -0.328125 l 0.496093 -0.546875 c 1.277344 -1.402344 4.160157 -1.496094 5.523438 0.003906 l 0.5 0.542969 c 0.175781 0.199219 0.425781 0.316407 0.691406 0.328125 c 0.265625 0.015625 0.523437 -0.078125 0.722656 -0.257812 c 0.195313 -0.179688 0.3125 -0.429688 0.324219 -0.695313 c 0.011719 -0.261719 -0.082031 -0.523437 -0.261719 -0.71875 l -0.5 -0.546875 c -1.121093 -1.234375 -2.703125 -1.828125 -4.269531 -1.816406 z m 0.03125 4 c -0.511719 0 -1.023438 0.195312 -1.414062 0.585938 c -0.78125 0.78125 -0.78125 2.046874 0 2.828124 s 2.046874 0.78125 2.828124 0 s 0.78125 -2.046874 0 -2.828124 c -0.390624 -0.390626 -0.902343 -0.585938 -1.414062 -0.585938 z m 0 0"/>
                        </svg>
                        <h4>Domotique et objets connectés</h4>
                        <p>Nous vous proposons des systèmes de domotique pour faciliter la gestion de votre énergie et améliorer votre confort.</p>
                        <Link to={'/services/domotique-et-objets-connectes'} className="btn-tertiary">En savoir plus</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
