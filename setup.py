# -*- coding: utf-8 -*-

import distutils.cmd
import os
import subprocess
from io import open

from setuptools import setup

setup(
    name='blender-sphinx-theme',
    version='0.1',
    url='https://git.blender.org/gitweb/gitweb.cgi/blender-org.git',
    license='MIT',
    author='Blender Foundation',
    author_email='carlisle.b3d@gmail.com',
    description='Bthree theme for Sphinx',
    long_description=open('README.md', encoding='utf-8').read(),
    cmdclass={},
    zip_safe=False,
    packages=['blender-sphinx-theme'],
    package_data={'blender-sphinx-theme': [
        'theme.conf',
        '*.html',
        'static/css/*.css',
        'static/css/fonts/*.*',
        'static/js/*.js',
    ]},
    include_package_data=True,
    # See http://www.sphinx-doc.org/en/stable/theming.html#distribute-your-theme-as-a-python-package
    entry_points={
        'sphinx.html_themes': [
            'blender-sphinx-theme = blender_sphinx_theme',
        ]
    },
    python_requires='>=2.7,!=3.0.*,!=3.1.*,!=3.2.*,!=3.3.*',
    install_requires=[
        'sphinx>=1.6',
        'docutils<0.18',
    ],
    tests_require=[],
    extras_require={
        'dev': [],
    },
    classifiers=[
        'Framework :: Sphinx',
        'Framework :: Sphinx :: Theme',
        'Development Status :: 5 - Production/Stable',
        'License :: OSI Approved :: MIT License',
        'Environment :: Console',
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
        'Programming Language :: Python :: 3.9',
        'Operating System :: OS Independent',
        'Topic :: Documentation',
        'Topic :: Software Development :: Documentation',
    ],
    project_urls={
        'Homepage': 'https://git.blender.org/gitweb/gitweb.cgi/blender-org.git',
        'Source Code': 'https://git.blender.org/gitweb/gitweb.cgi/blender-org.git',
        'Issue Tracker': 'https://git.blender.org/gitweb/gitweb.cgi/blender-org.git',
    },
)
