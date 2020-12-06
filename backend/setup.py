import io

from setuptools import find_packages
from setuptools import setup

setup(
    name="mi_service",
    version="1.0.0",
    license="BSD",
    maintainer="cagta",
    maintainer_email="cagatay@cagataytanyildiz.com",
    description="Mi Visualization Backend",
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    install_requires=["flask","pytest","geopandas", "waitress"],
    extras_require={"test": ["pytest", "coverage"]},
)
