import React from 'react'
import './IconeMarcacao.css'

export function IconeMarcacao(props) {
	return <div className={'icon-container'}>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		
	</div>
}