import React from 'react'
import PureComponent from './PureComponent'
import Settings from '../blog_settings.json'
import Helmet from 'react-helmet'
import Badge from './Badge'

class Header extends PureComponent {
  title() {
    return this.props.title || Settings.title
  }
  render() {
    return (
        <header>
          <Helmet title={this.title()}/>
          <nav>
            <ul>
              { Settings.menu.map(item =>
                <li key={item.id}><a href={item.url}>{item.name}</a></li>
              )}
            </ul>
          </nav>
          <h1 className="brand">{Settings.title}<small>{Settings.subtitle}</small></h1>
          <aside>
            <p dangerouslySetInnerHTML={{__html: Settings.tagline}} />
            <p>
              { Settings.badges.map(badge =>
                <Badge key={badge.id} badge={badge}/>
              )}
            </p>
          </aside>
        </header>
    ); //TODO: Refactor title to multiple titles based on content
  }
}

export default Header;

{/*
<header>
  <nav>
    <ul>{{ range .Site.Menus.main }}<li><a href="{{ .URL | absURL }}">{{ .Name }}</a></li>{{ end }}</ul>
  </nav>
  {{ if eq .Section "page" }}
  <h1 class="title">{{ .Title }}</h1>
  {{ else if eq .Section "post" }}
  <h1 class="title">{{ .Title }}</h1>
  <aside>
    <p>on <strong>{{ .Date.Format "Mon, Jan 02, 2006" }}</strong></p>
  </aside>
  {{ else }}
  <h1 class="brand">{{ .Site.Title }} <small>{{ .Site.Params.subtitle }}</small></h1>
  <aside>
    <p>{{ .Site.Params.tagline | safeHTML }}</p>
    <p>
      {{ with .Site.Params.github }}<a href="{{ . }}"><i class="fa fa-github"></i></a>{{ end }}
      {{ with .Site.Params.email }}<a href="{{ . }}"><i class="fa fa-envelope"></i></a>{{ end }}
      {{ with .Site.Params.twitter }}<a href="{{ . }}"><i class="fa fa-twitter"></i></a>{{ end }}
      {{ with .Site.Params.bitbucket }}<a href="{{ . }}"><i class="fa fa-bitbucket"></i></a>{{ end }}
      {{ with .Site.Params.stackoverflow }}<a href="{{ . }}"><i class="fa fa-stack-overflow"></i></a>{{ end }}
      {{ with .Site.Params.linkedin }}<a href="{{ . }}"><i class="fa fa-linkedin"></i></a>{{ end }}
      {{ with .Site.Params.facebook }}<a href="{{ . }}"><i class="fa fa-facebook"></i></a>{{ end }}
    </p>
  </aside>
  {{ end }}
</header
  **/}