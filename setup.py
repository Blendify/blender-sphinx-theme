# -*- coding: utf-8 -*-

import distutils.cmd
import os
import subprocess
from io import open

from setuptools import setup

setup(
    name='bthree_sphinx',
    version='0.1',
    url='https://git.blender.org/gitweb/gitweb.cgi/blender-org.git',
    license='MIT',
    author='Blender Foundation',
    author_email='carlisle.b3d@gmail.com',
    description='Bthree theme for Sphinx',
    long_description=open('README.rst', encoding='utf-8').read(),
    cmdclass={},
    zip_safe=False,
    packages=['bthree_sphinx'],
    package_data={'bthree_sphinx': [
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
            'bthree_sphinx = bthree_sphinx',
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
