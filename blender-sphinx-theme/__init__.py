"""
Blender docs  Sphinx theme.
"""

from os import path
# from sys import version_info as python_version

# from sphinx import version_info as sphinx_version
# from sphinx.locale import _
# from sphinx.util.logging import getLogger


__version__ = '0.1.0'
__version_full__ = __version__

# logger = getLogger(__name__)


# See http://www.sphinx-doc.org/en/stable/theming.html#distribute-your-theme-as-a-python-package
def setup(app):
    app.require_sphinx('3.0')

    # Register the theme that can be referenced without adding a theme path
    app.add_html_theme('blender-sphinx-theme',
                       path.abspath(path.dirname(__file__)))

    # theme_locale_path = path.join(path.abspath(path.dirname(__file__)), 'locale')
    # app.add_message_catalog('sphinx', theme_locale_path)

    # sphinx emits the permalink icon for headers, so choose one more in keeping with our theme
    app.config.html_permalinks_icon = "\uf0c1"

    return {'parallel_read_safe': True, 'parallel_write_safe': True}
