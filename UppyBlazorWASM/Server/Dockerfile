#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["UppyBlazorWASM/Server/UppyBlazorWASM.Server.csproj", "UppyBlazorWASM/Server/"]
COPY ["UppyBlazorWASM/Client/UppyBlazorWASM.Client.csproj", "UppyBlazorWASM/Client/"]
COPY ["UppyBlazorWASM/Shared/UppyBlazorWASM.Shared.csproj", "UppyBlazorWASM/Shared/"]
RUN dotnet restore "UppyBlazorWASM/Server/UppyBlazorWASM.Server.csproj"
COPY . .
WORKDIR "/src/UppyBlazorWASM/Server"
RUN dotnet build "UppyBlazorWASM.Server.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "UppyBlazorWASM.Server.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "UppyBlazorWASM.Server.dll"]
