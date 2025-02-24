# TODO: This can be better.. mimicked off what I know but getting some weird warning messaages.
# See: https://depot.dev/docs/container-builds/how-to-guides/optimal-dockerfiles/python-uv-dockerfile
FROM python:3.13

# Install UV (Python dependency manager) 
# See: https://docs.astral.sh/uv/guides/integration/docker/#installing-uv

# The installer requires curl (and certificates) to download the release archive
RUN apt-get update \
    && apt-get install -y \
    curl \
    ca-certificates

# Run the installer then remove it
ADD https://astral.sh/uv/install.sh /uv-installer.sh
RUN sh /uv-installer.sh && rm /uv-installer.sh

# Ensure the installed binary is on the `PATH`
ENV PATH="/root/.local/bin/:$PATH"

# Copy code over and install dependencies 
WORKDIR /app
ADD . /app
RUN uv sync --frozen

CMD ["uv", "run", "fastapi", "dev", "--host", "0.0.0.0"]