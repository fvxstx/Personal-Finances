namespace Finances_Backend.Categories;

public record UpdateCategoryRequest(string? Name, int? IconId, string ColorHex);