// let div = document.createElement('div')
// div.style.width = '45%'
// div.style.display = 'flex'
// div.style.flexDirection = 'row'
// div.style.flexWrap = 'wrap'
// div.style.margin = 'auto'
// document.body.appendChild(div)

// for(let i = 0; i <= 101; i++){
//     let div2 = document.createElement('div')
//     if(i % 2 == 0){
//         div2.style.backgroundColor = 'green'
//     }else{
//         div2.style.backgroundColor = 'yellow'
//     }
//     div2.textContent = i
//     div2.style.height = '60px'
//     div2.style.width = '100px'
//     div2.style.display = 'flex'
//     div2.style.justifyContent = 'center'
//     div2.style.alignItems = 'center'
//     div2.style.fontSize = '40px'
//     div2.style.color = 'white'
//     div2.style.margin = '2px'
//     div2.style.borderRadius = '15px'
//     div.appendChild(div2)
// }

// const countries = [
//     'Afghanistan',
//     'Albania',
//     'Algeria',
//     'Andorra',
//     'Angola',
//     'Antigua and Barbuda',
//     'Argentina',
//     'Armenia',
//     'Australia',
//     'Austria',
//     'Azerbaijan',
//     'Bahamas',
//     'Bahrain',
//     'Bangladesh',
//     'Barbados',
//     'Belarus',
//     'Belgium',
//     'Belize',
//     'Benin',
//     'Bhutan',
//     'Bolivia',
//     'Bosnia and Herzegovina',
//     'Botswana',
//     'Brazil',
//     'Brunei',
//     'Bulgaria',
//     'Burkina Faso',
//     'Burundi',
//     'Cambodia',
//     'Cameroon',
//     'Canada',
//     'Cape Verde',
//     'Central African Republic',
//     'Chad',
//     'Chile',
//     'China',
//     'Colombi',
//     'Comoros',
//     'Congo (Brazzaville)',
//     'Congo',
//     'Costa Rica',
//     "Cote d'Ivoire",
//     'Croatia',
//     'Cuba',
//     'Cyprus',
//     'Czech Republic',
//     'Denmark',
//     'Djibouti',
//     'Dominica',
//     'Dominican Republic',
//     'East Timor (Timor Timur)',
//     'Ecuador',
//     'Egypt',
//     'El Salvador',
//     'Equatorial Guinea',
//     'Eritrea',
//     'Estonia',
//     'Ethiopia',
//     'Fiji',
//     'Finland',
//     'France',
//     'Gabon',
//     'Gambia, The',
//     'Georgia',
//     'Germany',
//     'Ghana',
//     'Greece',
//     'Grenada',
//     'Guatemala',
//     'Guinea',
//     'Guinea-Bissau',
//     'Guyana',
//     'Haiti',
//     'Honduras',
//     'Hungary',
//     'Iceland',
//     'India',
//     'Indonesia',
//     'Iran',
//     'Iraq',
//     'Ireland',
//     'Israel',
//     'Italy',
//     'Jamaica',
//     'Japan',
//     'Jordan',
//     'Kazakhstan',
//     'Kenya',
//     'Kiribati',
//     'Korea, North',
//     'Korea, South',
//     'Kuwait',
//     'Kyrgyzstan',
//     'Laos',
//     'Latvia',
//     'Lebanon',
//     'Lesotho',
//     'Liberia',
//     'Libya',
//     'Liechtenstein',
//     'Lithuania',
//     'Luxembourg',
//     'Macedonia',
//     'Madagascar',
//     'Malawi',
//     'Malaysia',
//     'Maldives',
//     'Mali',
//     'Malta',
//     'Marshall Islands',
//     'Mauritania',
//     'Mauritius',
//     'Mexico',
//     'Micronesia',
//     'Moldova',
//     'Monaco',
//     'Mongolia',
//     'Morocco',
//     'Mozambique',
//     'Myanmar',
//     'Namibia',
//     'Nauru',
//     'Nepal',
//     'Netherlands',
//     'New Zealand',
//     'Nicaragua',
//     'Niger',
//     'Nigeria',
//     'Norway',
//     'Oman',
//     'Pakistan',
//     'Palau',
//     'Panama',
//     'Papua New Guinea',
//     'Paraguay',
//     'Peru',
//     'Philippines',
//     'Poland',
//     'Portugal',
//     'Qatar',
//     'Romania',
//     'Russia',
//     'Rwanda',
//     'Saint Kitts and Nevis',
//     'Saint Lucia',
//     'Saint Vincent',
//     'Samoa',
//     'San Marino',
//     'Sao Tome and Principe',
//     'Saudi Arabia',
//     'Senegal',
//     'Serbia and Montenegro',
//     'Seychelles',
//     'Sierra Leone',
//     'Singapore',
//     'Slovakia',
//     'Slovenia',
//     'Solomon Islands',
//     'Somalia',
//     'South Africa',
//     'Spain',
//     'Sri Lanka',
//     'Sudan',
//     'Suriname',
//     'Swaziland',
//     'Sweden',
//     'Switzerland',
//     'Syria',
//     'Taiwan',
//     'Tajikistan',
//     'Tanzania',
//     'Thailand',
//     'Togo',
//     'Tonga',
//     'Trinidad and Tobago',
//     'Tunisia',
//     'Turkey',
//     'Turkmenistan',
//     'Tuvalu',
//     'Uganda',
//     'Ukraine',
//     'United Arab Emirates',
//     'United Kingdom',
//     'United States',
//     'Uruguay',
//     'Uzbekistan',
//     'Vanuatu',
//     'Vatican City',
//     'Venezuela',
//     'Vietnam',
//     'Yemen',
//     'Zambia',
//     'Zimbabwe'
//   ]

// for(let i of countries){
//     let div_contry = document.createElement('div')
//     div_contry.textContent = i.toLocaleUpperCase()
//     div_contry.style.width = '120px'
//     div_contry.style.height = '130px'
//     div_contry.style.boxShadow = '0px 0px 2px 0px gray'
//     div_contry.style.margin = '5px'
//     div_contry.style.display = 'flex'
//     div_contry.style.justifyContent = 'center'
//     div_contry.style.alignItems = 'center'
//     div_contry.style.textAlign = 'center'
//     div_contry.style.fontSize = '12px'
//     div_contry.style.fontWeight = '900'
//     div.appendChild(div_contry)
// }
// // let data = new Date()
// // let divs = document.querySelector('.divs')
// // divs.style.width = '500px'
// // divs.style.height = '50px'
// // divs.textContent = data
let div = document.createElement('div')
div.style.width = '100px'
div.style.height = '100px'
let colors = ['red', 'green', 'aqua']
let i = 0
while(i < colors.length){
    setTimeout(() => {
        div.style.backgroundColor = colors[i++]
    }, 1000)
}
    
document.body.appendChild(div)