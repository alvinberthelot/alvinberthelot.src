# Pimp your Sublime Text : les préférences

[**Sublime Text**](http://www.sublimetext.com/) est devenu en quelques années un éditeur de texte incontournable pour les développeurs travaillant sur les technologies _front-end_.

Son approche **éditeur de texte léger** (à contrario d'un IDE surdimensionné) lui offre bien des avantages en terme de **rapidité d'utilisation et de facilité de prise en main**.

Cependant certaines fonctionnalités facilitant votre productivité vont vite s'avérer manquantes si vous le laissez en l'état.

Plusieurs moyens sont alors possibles pour l'adapter à votre besoin :

* Les **préférences**.
* Les **raccourcis clavier**.
* Les **snippets**.
* Les **plugins**.

Sur une série de petits articles, je présenterai ces différents concepts pour que vous puissiez **personnaliser cet éditeur de texte à vôtre goût**.

Dans cet article, nous verrons **le premier concept : les préférences**. Toutes ces options qui vous permettent de vous sentir plus à l'aise lorsque vous éditez du code : thème graphique, indentation, sauvegarde automatique, etc.

🚀 [TL;DR mode](#unrepositoryvautmieuxquunlongdiscours)

## Les niveaux de préférences

Sublime Text dispose de nombreuses options pour les préférences, mais sachez tout d'abord qu'elles peuvent se situer à **différents niveaux** :

* Préférences par défaut.
* Préférences de l'utilisateur.
* Préférences par projet.
* Préférences par syntaxe.
* Préférences en mode présentation.

Chaque niveau de préférences est représenté par un fichier spécifique ayant pour extension `.sublime-settings` (excepté pour les préférences par projet).

Les niveaux ont une hiérarchie puisque chaque niveau en surcharge un autre. L'ordre d'importance est croissant sur la liste citée précédemment.

### Préférences par défaut

Les préférences par défaut vont s'appliquer à tous les cas. Le **fichier associé ne doit pas être modifié, il a surtout un caractère informatif puisqu'il va exposer toutes les options possibles**.

Pour y accéder :

<code class="code-type-ui-menu">Sublime Text > Preferences > Settings - Default</code>

### Préférences de l'utilisateur

Les préférences de l'utilisateur vont vous permettre de **surcharger les préférences par défaut**. Ce fonctionnement permet de toujours garder une "copie propre" des préférences par défaut et de n'afficher que l'essentiel dans les préférences utilisateur.

Pour y accéder :

<code class="code-type-ui-menu">Sublime Text > Preferences > Settings - User</code>

OU

<code class="code-type-shortcut">⌘ + ,</code>
Raccourci clavier (⚠ Mac OS)

### Préférences par projet

Les préférences par projet vont vous permettre de surcharger les préférences citées préalablement, **en ne s'appliquant qu'à un projet défini dans Sublime Text**.

Ainsi ces préférences ne s'éditent pas dans un fichier `.sublime-settings` mais dans le fichier `.sublime-project` propre à votre projet avec la propriété settings (cf. [formalisme](http://docs.sublimetext.info/en/latest/file_management/file_management.html?highlight=settings#the-sublime-project-format)).

### Préférences par syntaxe

Les préférences par syntaxe vont vous permettre de surcharger les préférences citées préalablement, **en ne s'appliquant qu'à une certaine syntaxe** (par exemple HTML).

Pour y accéder :

<code class="code-type-ui-menu">Sublime Text > Preferences > Settings - More > Syntax Specific - User</code>

Vous êtes automatiquement positionné sur les préférences de la syntaxe que vous utilisiez auparavant.

### Préférences en mode présentation

Les préférences en mode présentation vont vous permettre de surcharger les préférences citées préalablement **lorsque vous passez en mode présentation**.

Fonctionnement très pratique lorsque vous êtes en **conférence ou pour un _live coding_**.

Pour y accéder :

<code class="code-type-ui-menu">Sublime Text > Preferences > Settings - More > Distraction Free - User</code>

Pour information, si vous souhaitez accéder au mode présentation :

<code class="code-type-ui-menu">View > Enter Distraction Free Mode</code>

OU

<code class="code-type-shortcut">⌘ + ⌃ + ⇧ + f</code>
Raccourci clavier (⚠ Mac OS)

## Les préférences

Maintenant que vous savez à quel niveau éditer les préférences, voyons comment celles-ci sont formalisées et quelles sont les plus intéressantes.

Les préférences et leurs options sont modifiables selon un formalisme JSON. Par exemple, si vous voulez préciser vos préférences pour l'indentation de votre code, cela se traduira de la sorte :

<script src="https://gist.github.com/alvinberthelot/852473dc280b70e0a60d.js"></script>

Concernant l'exhaustivité des préférences, je ne mentionnerai que **celles qui me semblent les plus intéressantes** (c'est une affaire de goût). Si vous souhaitez toutes les découvrir, vous trouverez des [documentations (non officielles)](http://docs.sublimetext.info/en/latest/reference/settings.html) à ce sujet.

<code class="code-type-settings">theme</code>
Option définissant le thème des composants graphiques.

<code class="code-type-settings">color_scheme</code>
Option définissant la palette de couleurs.

<code class="code-type-settings">font_face</code>
Option définissant la police à utiliser.

<code class="code-type-settings">font_size</code>
Option définissant la taille de la police.

<code class="code-type-settings">translate_tabs_to_spaces</code>
Option indiquant si votre indentation doit se faire via des espaces ou des tabulations.

<code class="code-type-settings">tab_size</code>
Option définissant la taille de vos indentations.

<code class="code-type-settings">shift_tab_unindent</code>
Option indiquant la suppression systématique de l'indentation avec le raccourci clavier ⇧ + ⇥, quelle que soit la sélection.

<code class="code-type-settings">save_on_focus_lost</code>
Option indiquant s'il doit y avoir une sauvegarde automatique de votre fichier si vous perdez le focus dessus.

<code class="code-type-settings">auto_indent</code>
Option indiquant s'il doit y avoir une indentation automatique.

<code class="code-type-settings">trim_automatic_white_space</code>
Option indiquant le nettoyage d'indentation automatique si celle-ci n'est pas utile (sans caractères derrière).

<code class="code-type-settings">trim_trailing_white_space_on_save</code>
Option indiquant le nettoyage des espaces en fin de ligne lors de la sauvegarde.

<code class="code-type-settings">bold_folder_labels</code>
Option indiquant une représentation graphique différente des dossiers par rapport aux fichiers dans la "_Side Bar_".

<code class="code-type-settings">open_files_in_new_window</code>
(⚠ Mac OS uniquement)<br />
Option indiquant si l'ouverture d'un fichier via le finder doit ouvrir une nouvelle fenêtre ou non.

<code class="code-type-settings">word_separators</code>
Option définissant les caractères qui sont considérés comme séparateurs de mots.

<code class="code-type-settings">highlight_line</code>
Option indiquant si la ligne sélectionnée doit être mise en exergue.

<code class="code-type-settings">highlight_modified_tabs</code>
Option indiquant si un fichier modifié doit être mise en exergue.

<code class="code-type-settings">rulers</code>
Option définissant la présence de règles verticales.

## Sauver et ré-appliquer vos préférences

Vous savez désormais où éditer les préférences avec les options qui vous intéressent.

Ce qui serait désormais intéressant c'est de **sauvegarder soigneusement** (c'est-à-dire avec du _versionning_) vos préférences et surtout de pouvoir les **importer** facilement sur n'importe quel Sublime Text.

La technique proposée ici est tout simplement de sauvegarder vos préférences (c'est-à-dire vos fichiers `.sublime-settings` au formalisme JSON) via **Git**, avec [GitHub](https://github.com/) par exemple.

Ainsi il suffit de **cloner un _repository_ Git** dans le répertoire approprié de Sublime Text pour réimporter immédiatement vos préférences.

Pour connaître le répertoire approprié :

<code class="code-type-ui-menu">Sublime Text > Preferences > Browse Packages...</code>

Au-delà d'un import classique, vous pouvez utiliser les branches ou les tags sous Git pour changer immédiatement de préférences.

### Variante avec lien symbolique

Personnellement j'aime bien centraliser toutes mes configurations (Bash Profile, Sublime Text, etc.) à un seul endroit pour rapidement les éditer et les sauvegarder.

C'est pourquoi je ne clone pas directement mes préférences dans le répertoire approprié, mais dans un autre répertoire personnalisé. J'utilise ensuite un lien symbolique pour associer mon répertoire personnalisé au répertoire approprié et le tour est joué. Vous pouvez directement modifier vos préférences dans Sublime Text puis les sauvegarder via Git.

Cette variante a néanmoins un inconvénient, dans le cas où vous allez **créer une nouvelle préférence** dans Sublime Text (ce qui sera quasiment toujours le cas), le nouveau fichier sera créé dans le répertoire approprié et non dans le personnalisé. Il vous faudra donc le déplacer dans votre _repository_ et créer le lien symbolique adéquat.

## Un _repository_ vaut mieux qu'un long discours

Si vous souhaitez voir mes préférences avec leurs options, vous pouvez consulter/cloner mon _repository_ GitHub [my_sublime_text_settings](http://bit.ly/20K1g9S) (⚠ Mac OS inside).

Vous trouverez également dedans la procédure détaillée avec la variante du lien symbolique 🎁.

Cette procédure sera d'ailleurs reprise pour les autres concepts (raccourcis clavier, _snippets_ et _plugins_) que nous verrons dans les prochains articles.
