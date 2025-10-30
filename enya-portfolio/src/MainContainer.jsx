import './MainContainer.css'

function MainContainer() {
    return (
        <div className={"container-box"}>
            <div className={"box-content"}>
                <div className={"browser-header"}>
                    <div className={'window-dots'}>
                        <svg className={'dot-exit'} width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="white"/>
                        </svg>
                        <svg className={'dot-min'} width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="white"/>
                        </svg>
                        <svg className={'dot-full'} width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="white"/>
                        </svg>
                    </div>
                    <div className={"search-bar"}>
                        <svg className={'icon'} width="24" height="24" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.625 24.625L19.1699 19.1699" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.0556 22.1111C17.6091 22.1111 22.1111 17.6091 22.1111 12.0556C22.1111 6.50203 17.6091 2 12.0556 2C6.50203 2 2 6.50203 2 12.0556C2 17.6091 6.50203 22.1111 12.0556 22.1111Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>enya-bekker.com</p>
                    </div>
                    <div style={{padding: '0 10px 0 10px'}}>
                        <svg width="26" height="26" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2H38M2 16.5H38M2 31H38" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                hewwoooo
            </div>
        </div>
    )
}

export default MainContainer