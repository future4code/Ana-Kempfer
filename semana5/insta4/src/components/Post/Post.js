import React from 'react'
import './Post.css'
import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeMarcacaoBranco from '../../img/small-bookmark.svg'
import iconeMarcacaoPreto from '../../img/bookmark-black-shape.svg'
import {IconeMarcacao} from '../IconeMarcacao/IconeMarcacao'

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      curtido: false,
      numeroCurtidas: 0,
      marcado: false,
      comentando: false,
      numeroComentarios: 0,
    }
  }

  onClickCurtida = () => {
    this.setState({
      curtido: true,
      numeroCurtidas: this.state.numeroCurtidas + 1
    })
    console.log('Curtiu!')
  }

  onClickMarcacao = () => {
    this.setState({
      marcado: !this.state.marcado
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeMarcacao 

    if(this.state.marcado){
      iconeMarcacao = iconeMarcacaoPreto
    }else{
      iconeMarcacao = iconeMarcacaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

      <IconeMarcacao 
          icone={iconeMarcacao}
          onclick={this.onClickMarcacao}
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post