import React from 'react'
import './Post.css'
import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeMarcacaoBranco from '../../img/small-bookmark.svg'
import iconeMarcacaoPreto from '../../img/bookmark-black-shape.svg'
// import {IconeMarcacao} from '../IconeMarcacao/IconeMarcacao'

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      post: [
        {
          foto: "",
          nome: "",
          curtida: false,
          numeroCurtidas: 0,
          comentando:false,
          numeroComentarios: 0,
          marcacao: false,

        }
      ]

      // curtido: false,
      // numeroCurtidas: 0,
      // comentando: false,
      // numeroComentarios: 0,
      // marcado: false,
      // numeroMarcacao: 0,
    };
  }

  onClickCurtida = () => {
    this.setState({
      curtida: true,
      numeroCurtidas: this.state.numeroCurtidas + 1
    })
    console.log('Curtiu!')
  }

  onClickMarcacao = () => {
    this.setState({
      marcado: true,
      numeroMarcacao: this.state.numeroMarcacao + 1
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

    const postGeral = this.state.post.map(post =>{
      return (
        IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />
      )
    });

    // let iconeCurtida

    // if(this.state.curtido) {
    //   iconeCurtida = iconeCoracaoPreto
    // } else {
    //   iconeCurtida = iconeCoracaoBranco
    // }

    // let iconeMarcacao 

    // if(this.state.marcado){
    //   iconeMarcacao = iconeMarcacaoPreto
    // }else{
    //   iconeMarcacao = iconeMarcacaoBranco
    // }

    // let componenteComentario

    // if(this.state.comentando) {
    //   componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
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

        <IconeComContador
          icone={iconeMarcacao}
          onclickIcone={this.onClickMarcacao}
          valorContador={this.state.numeroMarcacao}
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post