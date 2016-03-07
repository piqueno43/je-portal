<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="pt-br"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang="pt-br"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="pt-br"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="pt-br">
<!--<![endif]-->

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Tribunal Superior Eleitoral</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <link rel="icon" href="favicon.ico">
    <!-- <link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700' rel='stylesheet' type='text/css'> -->
    <link rel="stylesheet" href="temas/css/plugins.css">
    <link rel="stylesheet" href="temas/css/style.css">
    <script src="temas/js/vendors/modernizr-2.8.3-respond-1.4.2.min.js"></script>
</head>

<body class="site-tse">
    <!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
    <!-- <div class="full-width barra-topo">
            <div class="container">
                <div class="links-justica-eleitoral">
                    <img alt="Bandeira de identificação do portal" src="http://www.tse.jus.br/temas/img/bandeira-site/tse.jpg"/>
                    <a title="Link de salto para o mapa do site" href="#mapa_site"  accesskey="1" tabindex="1">Mapa do site</a> |
                    <a title="Link para o Portal da Justiça Eleitoral" target="_blank" href="http://www.justicaeleitoral.jus.br">Portal JE</a> |
                    <a title="Link para Contatos" target="_blank" class="internal-link" href="http://www.tse.jus.br/institucional/o-tse/contatos-e-informacoes-sobre-o-tse">Contatos</a> |
                    <a title="Link para o Espaço do servidor" target="_self" href="http://www.tse.jus.br/institucional/o-tse/espaco-do-servidor"class="internal-link">Espaço do servidor</a>
                </div>
                <div class="links-acessibilidade">
                    <a href="#" class="contrre-portal">Contraste</a> |
                    <a href="http://www.tse.jus.br/acessibilidades-tse" accesskey="0">Acessibilidades</a> |
                    <a href="http://english.tse.jus.br" target="_blank">English</a>
                </div>
            </div>
        </div> -->
        <div class="header-container">
            <header class="wrapper clearfix">
                <div class="logo-container">
                    <a href="#" title="Tribunal Superior Eleitoral"> <img class="logo" src="temas/img/logo.png" alt="Logo Tribunal Superior Eleitoral" />
                        <div class="title-container">
                            <h1 class="title">Tribunal Superior Eleitoral</h1>
                            <p class="tagline">O Tribunal da Democracia</p>
                        </div>
                    </a>
                </div>
                <div class="topo-midias-busca">
                    <ul class="campanhas-icones">
                        <li><a href="#" title="Link para Campanha Dezembro Vermelho"><i class="icon icon-campanha"></i></a> </li>
                        <li><a href="#" title="Link para Acesso à informação"><i class="icon icon-acesso"></i></a> </li>
                    </ul>
                    <ul class="redes-sociais-icones hide-mobile">
                        <li><a href="#" title="Link para Facebook"><i class="icon icon-facebook"></i></a> </li>
                        <li><a href="#" title="Link para Twitter"><i class="icon icon-twitter"></i></a> </li>
                        <li><a href="#" title="Link para Flickr"><i class="icon icon-flickr"></i></a> </li>
                        <li><a href="#" title="Link para Rss"><i class="icon icon-rss"></i></a> </li>
                        <li><a href="#" title="Link para Soundcloud"><i class="icon icon-soundcloud"></i></a> </li>
                        <li><a href="#" title="Link para Youtube"><i class="icon icon-youtube"></i></a> </li>
                    </ul>
                    <div role="search" class="box box-busca">
                        <form action="http://www.tse.jus.br/@@GSASearch" name="searchform" id="searchform" role="form" class="form-inline">
                            <div class="form-group">
                                <label for="busca" class="sr-only">Pesquisar</label>
                                <input class="form-control" type="search" autocomplete="off" placeholder="Pesquisar..." class="searchField inputLabel inputLabelActive text"
                                id="busca" name="SearchableText" autofocus>
                                <input type="image" src="http://www.tre-pr.jus.br/temas/img/lupa-pesquisar.png" alt="Pesquisar" class="botao_busca" title="Pesquisar"
                                value="Pesquisar">
                                <input type="hidden" id="rotulo_noticia" name="rotulo_noticia"> </div> <span class="busca_avancada">
                                <a accesskey="5" href="http://www.tse.jus.br/@@GSASearch?SearchableText= &amp;proxycustom=&lt;ADVANCED%2F&gt;">
                                    busca avançada
                                </a>
                            </span> </form>
                        </div>
                    </div>
                </header>
            </div>
            <div class="menu-principal">
                <?php require_once "temas/includes/menu.php"; ?> </div>
                <!-- Conteúdo -->
                <div class="wrapper">
                    <div class="todos-servicos" role="tabpanel" data-example-id="togglable-tabs">
                        <ul id="myTab" class="nav nav-tabs nav-tabs-responsive" role="tablist">
                            <li role="presentation" class="active">
                            <a href="#servicos-eleitor" id="servicos-eleitor-tab" role="tab" data-toggle="tab" aria-controls="home">
                                    <span class="text">Serviços ao eleitor</span> </a>
                                </li>
                                <li role="presentation" class="next">
                                    <a href="#servicos-eleicoes-2016" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile"> <span class="text">Eleições 2016</span> </a>
                                </li>
                                <li role="presentation">
                                    <a href="#servicos-judiciais" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile"> <span class="text">Serviços Judiciais</span> </a>
                                </li>
                                <li role="presentation">
                                    <a href="#servicos-destaques" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile"> <span class="text">Destaques</span> </a>
                                </li>
                                <li role="presentation">
                                    <a href="#servicos-visite-tambem" role="tab" id="servicos-visite-tambem-tab" data-toggle="tab" aria-controls="servicos-visite-tambem">
                                        <span class="text">Visite também</span> </a>
                                    </li>
                                </ul>
                                <div id="myTabContent" class="tab-content">
                                    <div role="tabpanel" class="tab-pane fade" id="servicos-eleitor" aria-labelledby="servicos-eleitor-tab">
                                        <ul>
                                            <li><a target="_self" href="http://www.tse.jus.br/eleitor/servicos/certidoes/certidao-composicao-partidaria">Certidão de composição partidária</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/eleitor/servicos/certidoes/certidao-de-crimes-eleitorais">Certidão de crimes eleitorais</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/eleitor/servicos/certidoes/certidao-de-quitacao-eleitoral">Certidão de quitação eleitoral</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/eleitor/servicos/certidoes/certidao-de-filiacao-partidaria">Certidão de filiação partidária</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/eleitor/servicos/certidoes/certidao-negativa-alistamento-eleitoral">Certidão negativa de alistamento</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/eleitor/disque-eleitor/disque-eleitor">Disque-Eleitor</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/eleitor/servicos/justificativa-eleitoral/justificativa-eleitoral">Justificativa eleitoral</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/eleitor/servicos/pre-atendimento-eleitoral-titulo-net/pre-atendimento-eleitoral-titulo-net">Pré-atendimento eleitoral</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/eleicoes/processo-eleitoral-brasileiro/funcionamento-do-processo-eleitoral-no-brasil">Processo Eleitoral no Brasil</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/eleitor/mesario/canal-do-mesario">Mesário</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/eleitor/servicos/titulo-e-local-de-votacao/titulo-e-local-de-votacao">Título e local de votação</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/eleitor/servicos/situacao-eleitoral/titulo-e-local-de-votacao">Situação eleitoral</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/eleitor/zonas-eleitorais/zonas-eleitorais-cartorios">Zonas eleitorais/Cartórios</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div role="tabpanel" class="tab-pane fade" id="servicos-eleicoes-2016" aria-labelledby="servicos-eleicoes-2016-tab">
                                        <ul>
                                            <li><a target="_self" href="http://www.tse.jus.br/eleicoes/eleicoes-2016/calendario-eleitoral">Calendário eleitoral 2016</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/eleicoes/eleicoes-2016/eleicoes-2016">Informações das Eleições 2016</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/eleicoes/eleicoes-2016/normas-e-documentacoes-eleicoes-2016">Normas e documentações</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/eleicoes/eleicoes-2016/pesquisas-eleitorais/pesquisas-eleitorais-eleicoes-2016">Pesquisas eleitorais</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/hotSites/testes-publicos-seguranca-2016/">Teste Público de Segurança</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div role="tabpanel" class="tab-pane fade" id="servicos-destaques" aria-labelledby="servicos-destaques-tab">
                                        <ul>
                                            <li><a target="_self" href="http://www.tse.jus.br/servicos-judiciais/acompanhamento-processual-push">Acompanhamento processual e Push</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/legislacao/codigo-eleitoral-anotado/codigo-eleitoral">Código Eleitoral anotado e legislação complementar</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/servicos-judiciais/diario-da-justica-eletronico">Diário da Justiça Eletrônico</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/jurisprudencia/inteiro-teor">Inteiro teor de decisões</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/institucional/sistemas/monitoramento-de-sistemas">Monitoramento de sistemas</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/servicos-judiciais/pautas-de-julgamento">Pautas de julgamento</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/servicos-judiciais/peticao-eletronica/sistema-de-peticao-eletronica">Petição eletrônica</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/servicos-judiciais/processo-judicial-eletronico/processo-judicial-eletronico">Processo Judicial Eletrônico  (PJe)</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/servicos-judiciais/processos-julgados">Processos julgados</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/servicos-judiciais/tramitacao-processual/tramitacao-processual">Tramitação processual</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div role="tabpanel" class="tab-pane fade" id="servicos-judiciais" aria-labelledby="servicos-judiciais-tab">
                                        <ul>
                                            <li><a target="_self" href="http://www.tse.jus.br/hotsites/2-seminario-ged/">Conheça o 2º Seminário de Gestão Eletrônica do Poder Judiciário (GED)</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/servicos-judiciais/processo-judicial-eletronico/processo-judicial-eletronico">PJe será obrigatório no TSE a partir de 24.11.2015</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/institucional/o-tse/comunicados/minuta-de-resolucao-2014-regulamentacao-do-art-22-a-da-lei-no-9-096-1995">Minuta de resolução - perda de mandato eletivo por infidelidade partidária</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/eleicoes/eleicoes-2016/qr-code-no-boletim-de-urna-manual-para-a-criacao-de-aplicativos-de-leitura">QR Code no Boletim de Urna: manual para a criação de aplicativos</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/jurisprudencia/resolucoes/minuta-de-resolucao-criacao-e-funcionamento-dos-partidos-politicos">Minuta de resolução - criação e funcionamento dos partidos políticos</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/eleicoes/biometria-e-urna-eletronica/perguntas-frequentes">Sistema eletrônico de votação</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/institucional/o-tse/comunicados/cancelamento-das-sessoes-ordinarias">Comunicado</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div role="tabpanel" class="tab-pane fade" id="servicos-visite-tambem" aria-labelledby="servicos-visite-tambem-tab">
                                        <ul>
                                            <li><a target="_self" href="http://www.tse.jus.br/institucional/o-tse/contatos-e-informacoes-sobre-o-tse">Contatos</a>
                                            </li>
                                            <li><a target="_blank" href="http://inter03.tse.jus.br/sisforn-web">Comprovante anual de retenção - DIRF</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/servicos-judiciais/guia-de-recolhimento-da-uniao-gru">Guia de Recolhimento da União (GRU)</a>
                                            </li>
                                            <li><a target="_self" href="http://www.tse.jus.br/institucional/sistemas/sei/sei-usuario-externo">SEI - usuário externo</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="main">
                            <div class="wrapper clearfix"> </div>
                        </div>
                        <!-- :Conteúdo -->
                        <div class="main-footer">
                            <footer class="wrapper clearfix">
                                <?php require "temas/includes/footer_links.php";?>
                                <section class="content copyright">
                                    <h1 class="hidden">Informações sobre Tribunal Superior Eleitoral</h1>
                                    <div class="address" itemscope itemtype="http://schema.org/Organization"> <span itemprop="name">Tribunal Superior Eleitoral</span>
                                        <br>
                                        <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress"> <span itemprop="streetAddress">Setor de Administração Federal Sul (SAFS), Quadra 7, Lotes 1/2</span>
                                            <br> <span itemprop="addressLocality">Brasília</span>, <span itemprop="addressRegion">Brasil/DF</span>                        <span itemprop="postalCode">70070-600</span> </div> Tel.: <span itemprop="telephone">+55 61 3030-7000</span>                    </div>
                                        </section>
                                    </footer>
                                </div>
                                <script src="//code.jquery.com/jquery-1.10.1.min.js"></script>
                                <script src="temas/js/vendors/jquery-accessibleMegaMenu.js"></script>
                                <script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.2/js/bootstrap.min.js"></script>
                                <script src="temas/js/main.js"></script>
                            </body>

                            </html>