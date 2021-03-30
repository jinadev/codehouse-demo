import './styles.css';
import parse from 'react-html-parser'

const ListItem = ({ listItem }) => {
    console.log(listItem, 'aaaaa')
    return(
        <div className='list-container'>
            <div className='image-item'>
                <div className='image-container'>
                <img src={listItem?.pagemap?.cse_thumbnail?.[0]?.src} />
                </div>
            </div>
            <div className='content-item'>
                <div className='content-container'>
                    <a href={listItem?.htmlFormattedUrl}>{parse(listItem?.htmlFormattedUrl)}</a>
                    <label className='title'>{parse(listItem?.htmlTitle)}</label>
                    <label className='content'>{parse(listItem?.htmlSnippet)}</label>
                </div>
            </div>
        </div>
    )
}

export default ListItem;