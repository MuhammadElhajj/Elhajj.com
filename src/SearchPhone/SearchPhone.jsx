import './SearchPhone.css'
import { CgClose } from 'react-icons/cg'

function SearchPhone ({showSearchPhone , CloseSearch}) {
    // return <div className='SearchPhone' style={{display : showSearchPhone}}>
    return <div className='SearchPhone' style={{display : `${showSearchPhone}` }}>
        <input className='SearchPhone__input' type="search" placeholder='Search here ..' />
        <div className='SearchPhone__Close'>
        <CgClose className='SearchPhone__Close__Icon' onClick={CloseSearch}/>

        </div>
    </div>

}


export default SearchPhone